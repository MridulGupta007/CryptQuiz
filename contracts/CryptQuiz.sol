// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CryptQuiz {
    struct Quiz {
        address manager;
        //(gas fees + winning amount)
        uint256 totalFund;
        string theme;
        uint256 startTime;
        //(totalFund - gas fees)
        uint256 prizeMoney;
        //uint remainingAmount;

        string imageCID;
        string questionCID;
        uint256 totalParticipants;
        uint256[] leaderboard;
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

    uint256 constant MINAMOUNT = 1500000000000000000;
    uint256 constant GASFEES = 300000000000000000;
    uint256 quizId;
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

    function listQuiz(
        string memory _theme,
        uint256 _time,
        uint256 _totalFund,
        string memory _questionCID,
        string memory _imageCID
    ) public payable {
        require(msg.value == _totalFund);
        require(_totalFund > GASFEES);

        quizId++;

        quizzes[quizId].manager = msg.sender;

        quizzes[quizId].totalFund = _totalFund;

        quizzes[quizId].theme = _theme;

        quizzes[quizId].startTime = _time;

        quizzes[quizId].prizeMoney = _totalFund - GASFEES;

        quizzes[quizId].imageCID = _imageCID;

        quizzes[quizId].questionCID = _questionCID;
    }

    function getRemainingTime(uint256 _quizId) public view returns (uint256) {
        return quizzes[_quizId].startTime - block.timestamp;
    }

    function prizeDispersal(
        address _winner,
        uint256 _quizId,
        uint256 _usedGas
    ) public {
        require(block.timestamp > quizzes[_quizId].startTime + 180);
        payable(_winner).transfer(quizzes[_quizId].prizeMoney);
        uint256 _remainingAmount = GASFEES - _usedGas;
        payable(quizzes[_quizId].manager).transfer(_remainingAmount);
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

    function getQuizManager(uint256 _quizId) public view returns (address) {
        return quizzes[_quizId].manager;
    }

    function getQuizTotalFund(uint256 _quizId) public view returns (uint256) {
        return quizzes[_quizId].totalFund;
    }

    function getQuizTheme(uint256 _quizId) public view returns (string memory) {
        return quizzes[_quizId].theme;
    }

    function getQuizTime(uint256 _quizId) public view returns (uint256) {
        return quizzes[_quizId].time;
    }

    function getQuizPrizeMoney(uint256 _quizId) public view returns (uint256) {
        return quizzes[_quizId].prizeMoney;
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

    function getQuiztotalParticipants(uint256 _quizId)
        public
        view
        returns (uint256)
    {
        return quizzes[_quizId].totalParticipants;
    }

    function getLeaderboard(uint256 _quizId)
        external
        view
        returns (uint256[] memory)
    {
        return quizzes[_quizId].leaderboard;
    }

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
}
