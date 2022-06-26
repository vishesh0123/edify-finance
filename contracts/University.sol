//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract University {
    //University Name
    string public name;

    //address of the university contract maker
    address public admin;

    //tracks the approval status for students for lending and borrowing in
    //universities pool
    mapping(address => bool) public approvalStatus;

    //token issued by university which can be used as collateral
    address public tokenIssued;

    //list of all dipositors
    address[] public reservesList;
    //Tracking intrest earned
    mapping(address => uint256) intrestEarned;

    //tracks all the funds in lending pool by depositors
    mapping(address => uint256) lendingPool;
    //Total Liquidity deposited to lending pool
    uint256 public totalLendingReserve;
    //Collateral tracker of tokenIssued
    mapping(address => uint256) collateralReserve;
    //Borrow amount tracker
    mapping(address => uint256) borrowTracker;
    mapping(address => uint32) monthsTracker;
    //Total Borrowed amount
    uint256 public totalBorrow;

    address public usdt = 0x5896A07Ff575A937C06474fdD2B8EF626F4bbC6f;

    // monthly intrest in percentage
    uint32 public monthlyIntrest;

    constructor(
        string memory _name,
        address token,
        uint32 intrest
    ) {
        monthlyIntrest = intrest;
        name = _name;
        tokenIssued = token;
        admin = msg.sender;
    }

    function approveStudent(address student) public {
        require(msg.sender == admin);
        require(approvalStatus[student] == false);
        approvalStatus[student] = true;
    }

    function deposit(uint256 amount) public returns (bool) {
        require(msg.sender == admin || approvalStatus[msg.sender] == true);
        bool status = IERC20(usdt).transferFrom(
            msg.sender,
            address(this),
            amount
        );
        require(status == true);
        lendingPool[msg.sender] = lendingPool[msg.sender] + amount;
        totalLendingReserve = totalLendingReserve + amount;
        reservesList.push(msg.sender);
        return (true);
    }

    function withdraw(uint256 amount) public returns (bool) {
        require(msg.sender == admin || approvalStatus[msg.sender] == true);
        require(totalLendingReserve >= amount);
        lendingPool[msg.sender] = lendingPool[msg.sender] - amount;
        totalLendingReserve = totalLendingReserve - amount;
        bool status = IERC20(usdt).transfer(msg.sender, amount);
        require(status == true);
        return true;
    }

    function borrow(uint256 amount, uint32 months) public returns (bool) {
        require(msg.sender != admin);
        require(approvalStatus[msg.sender] == true);
        require(borrowTracker[msg.sender] == 0);
        require(totalLendingReserve >= amount);
        uint256 collateral = (amount) + ((amount * 20) / 100);
        bool status = IERC20(tokenIssued).transferFrom(
            msg.sender,
            address(this),
            collateral
        );
        require(status == true);
        collateralReserve[msg.sender] =
            collateralReserve[msg.sender] +
            collateral;
        borrowTracker[msg.sender] = amount;
        monthsTracker[msg.sender] = months;
        totalBorrow = totalBorrow + amount;

        bool borrowstatus = IERC20(usdt).transfer(msg.sender, amount);
        require(borrowstatus == true);
        return true;
    }

    function repay() public returns (bool) {
        require(msg.sender != admin);
        require(approvalStatus[msg.sender] == true);
        require(borrowTracker[msg.sender] != 0);
        uint32 months = monthsTracker[msg.sender];
        uint32 totalIntrest = months * monthlyIntrest;
        uint256 extra = ((borrowTracker[msg.sender] * totalIntrest) / 100);
        uint256 totalRepayment = (borrowTracker[msg.sender]) +
            ((borrowTracker[msg.sender] * totalIntrest) / 100);
        totalBorrow = totalBorrow - borrowTracker[msg.sender];
        totalLendingReserve = totalLendingReserve + borrowTracker[msg.sender];
        borrowTracker[msg.sender] = 0;
        monthsTracker[msg.sender] = 0;

        bool status = IERC20(usdt).transferFrom(
            msg.sender,
            address(this),
            totalRepayment
        );
        require(status == true);
        uint256 collateral = collateralReserve[msg.sender];
        collateralReserve[msg.sender] = 0;
        bool cstatus = IERC20(tokenIssued).transfer(msg.sender, collateral);
        require(cstatus == true);
        for (uint256 index = 0; index < reservesList.length; index++) {
            uint256 amount = extra * lendingPool[reservesList[index]];
            intrestEarned[msg.sender] =
                intrestEarned[msg.sender] +
                (amount / totalLendingReserve);
        }
        return true;
    }

    function liquidation() public returns (bool) {
        //to be updated
        revert();
    }
}
