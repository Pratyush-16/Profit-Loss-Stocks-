const initialPrice = document.querySelector("#initial-price");
const stocksQuantity= document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-here");
const ouputBox = document.querySelector("#output")


checkBtn.addEventListener('click', submitHandler)

function submitHandler(){
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;

    calculateProfitAndLoss(ip, qty,curr)
}

//ex-05
function calculateProfitAndLoss(initial, quantity, current){
    if(initial> current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) *100;

        showOutput('Hey , the loss is: ' +  loss ,'and the loss percentage is:' + lossPercentage ,'%');
    }else if(current> initial) {
            var profit = (current - initial) * quantity;
            var profitPercentage = (profit / initial) *100;
    
            showOutput('Hey , the profit is: ' +  profit ,'and the profit percentage is:' + profitPercentage ,'%');
        } else{
            showOutput("No Pain No Gain");
        } 
}

// calculateProfitAndLoss(100,10,10);
// calculateProfitAndLoss(20,10,100);
// calculateProfitAndLoss(100,20,1000);

function showOutput(message){
    // switch (status) {
    //     case "profit":
    //         ouputBox.innerHTML = message;
            
    //         break;
    
    //     default:
    //         break;
    // }
    ouputBox.innerHTML = message;
}

