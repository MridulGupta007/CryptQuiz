// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CryptQuiz {
    struct Quiz {
        string name;
        address manager;
        string theme;
        uint256 startTime;
        uint256 prizeMoney;
        uint256 totalQuestions;
        string imageCID;
        string questionCID;
        string descriptionCID;
        uint256 totalParticipants;
        uint256[] leaderboard;
        bool isExpired;
    }

    struct User {
        uint256[] pastQuizId;
        //quizId => correct answers out of 20
        mapping(uint256 => uint256) correctAnswer;
        //quizId => score
        mapping(uint256 => uint256) score;
        //quizId => rank
        mapping(uint256 => uint256) rank;
    }

    uint256 public quizId;
    address owner;

    //quizId => Quiz
    mapping(uint256 => Quiz) quizzes;

    //WalletId => User
    mapping(string => User) users;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function getQuizId() public view returns (uint256) {
        return quizId;
    }

    function listQuiz(
        string memory _name,
        string memory _theme,
        uint256 _time,
        uint256 _prizeMoney,
        string memory _questionCID,
        string memory _imageCID,
        string memory _descriptionCID,
        uint256 _totalQuestions
    ) public payable {
        quizId++;

        quizzes[quizId].name = _name;

        quizzes[quizId].manager = msg.sender;

        quizzes[quizId].theme = _theme;

        quizzes[quizId].startTime = _time;

        quizzes[quizId].prizeMoney = _prizeMoney;

        quizzes[quizId].totalQuestions = _totalQuestions;

        quizzes[quizId].imageCID = _imageCID;

        quizzes[quizId].descriptionCID = _descriptionCID;

        quizzes[quizId].questionCID = _questionCID;
    }

    function prizeDispersal(address _winner, uint256 _quizId) public {
        payable(_winner).transfer(quizzes[_quizId].prizeMoney);
        quizzes[_quizId].isExpired = true;
    }

    function setQuiztotalParticipants(
        uint256 _quizId,
        uint256 _totalParticipants
    ) public {
        quizzes[_quizId].totalParticipants = _totalParticipants;
    }

    // This function will be called when the quiz has been finished and all the scores starting from the highest
    // to the lowest will be pushed in leaderboard array
    function setLeaderboard(uint256 _quizId, uint256 _score) external {
        quizzes[_quizId].leaderboard.push(_score);
    }

    function getQuizOrganizationName(uint256 _quizId)
        public
        view
        returns (string memory)
    {
        return quizzes[_quizId].name;
    }

    function getQuizManager(uint256 _quizId) public view returns (address) {
        return quizzes[_quizId].manager;
    }

    function getQuizTheme(uint256 _quizId) public view returns (string memory) {
        return quizzes[_quizId].theme;
    }

    function getQuizTime(uint256 _quizId) public view returns (uint256) {
        return quizzes[_quizId].startTime;
    }

    function getQuizPrizeMoney(uint256 _quizId) public view returns (uint256) {
        return quizzes[_quizId].prizeMoney;
    }

    function getQuizTotalQuestions(uint256 _quizId)
        public
        view
        returns (uint256)
    {
        return quizzes[_quizId].totalQuestions;
    }

    function getQuizQuestionCID(uint256 _quizId)
        public
        view
        returns (string memory)
    {
        return quizzes[_quizId].questionCID;
    }

    function getQuizImageCID(uint256 _quizId)
        public
        view
        returns (string memory)
    {
        return quizzes[_quizId].imageCID;
    }

    function getQuizDescriptionCID(uint256 _quizId)
        public
        view
        returns (string memory)
    {
        return quizzes[_quizId].descriptionCID;
    }

    function getQuiztotalParticipants(uint256 _quizId)
        public
        view
        returns (uint256)
    {
        return quizzes[_quizId].totalParticipants;
    }

    function getQuizLeaderboard(uint256 _quizId)
        external
        view
        returns (uint256[] memory)
    {
        return quizzes[_quizId].leaderboard;
    }

    function getQuizIsExpired(uint256 _quizId) external view returns (bool) {
        return quizzes[_quizId].isExpired;
    }

    //Participants

    // this function will be called for every participant
    function completedQuiz(
        string memory walletId,
        uint256 _quizId,
        uint256 _correctAnswer,
        uint256 _score,
        uint256 _rank
    ) public {
        users[walletId].pastQuizId.push(_quizId);
        users[walletId].correctAnswer[_quizId] = _correctAnswer;
        users[walletId].score[_quizId] = _score;
        users[walletId].rank[_quizId] = _rank;
    }

    function getCorrectAnswer(string memory walletId, uint256 _quizId)
        public
        view
        returns (uint256)
    {
        return users[walletId].correctAnswer[_quizId];
    }

    function getScore(string memory walletId, uint256 _quizId)
        public
        view
        returns (uint256)
    {
        return users[walletId].score[_quizId];
    }

    function getRank(string memory walletId, uint256 _quizId)
        public
        view
        returns (uint256)
    {
        return users[walletId].rank[_quizId];
    }

    function getPastQuizes(string memory walletId)
        public
        view
        returns (uint256[] memory)
    {
        return users[walletId].pastQuizId;
    }
}
