/*function signature/sample */
function calculateMoney(numberOfTickets) {
    try {
        if (!Number.isInteger(numberOfTickets) || numberOfTickets <0) {
            throw new Error("Invalid Number");
        }
        const ticketPrice = 120;
        const darowanExpense = 500;
        const numberOfStaff = 8;
        const staffLunchExpensePerPerson = 50;
        const totalIncome = numberOfTickets * ticketPrice;
        const totalExpense = darowanExpense + (numberOfStaff *  staffLunchExpensePerPerson);
        const remainingMoney = totalIncome - totalExpense;
        return remainingMoney ;
    } catch (error) {
        return error.message;
      }
    
    }
    console.log(calculateMoney(10));