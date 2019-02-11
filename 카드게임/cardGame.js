$(()=>{
	var myMoney=1000;
	//	순서대로 스페이드,클로버,다이아몬드,하트,조커,걸
	var card=[0,0,0,0,0,0];
	//베팅한 금액 나중에 배열로 만들어서 하고싶다. 
	
	
	function main(money){
		let totalBetMoney = 0;
		let sum = 0;
		dice();
		
		var cloverBet = cardBetValue(clover);
		var dieamondBet = cardBetValue(dieamond);
		var heartBet = cardBetValue(heart);
		var zokerBet = cardBetValue(zoker);
		var girlBet = cardBetValue(girl);
		var spadeBet = cardBetValue(spade);
		
		var playerBet = [spadeBet,cloverBet,dieamondBet,heartBet,zokerBet,girlBet];

		for(i=0; i<5; i++){
			totalBetMoney += Number(playerBet[i]);
//			var totalBet = totalBet + playerBet[i]
//			console.log(totalBet);
			sum += (playerBet[i] * card[i]);
		}
//		console.log("hel" + cloverBet + dieamondBet);
		console.log("총베팅머니 : "+totalBetMoney);
		console.log("카드베팅 : " + playerBet);
		console.log("Win Price :" +sum);
		myMoney = money - totalBetMoney + sum;
		$('#leftMoney').text(myMoney);
		$('#howMuchPaied').text(totalBetMoney);
		card = [0,0,0,0,0,0];
	}; 
	
// 	매개변수로 들어온 텍스트 필드의 value값 찾기 . 
	function cardBetValue(name){
		let $name = name;
		var getBet = $(name).val();
		var getId = $(name).attr('id');
	
			if(isNaN(getBet)==false){
				return getBet;
			}else if((getBet)==''){
				return 0;
			}else{
				alert(getId+ "의 란에 숫자를 입력해주세요.");
				return 0;
			}
	};
	
	//4번 동안 나온 숫자에 따라 해당하는 인덱스의 값이 1된다. 
	function dice(){
		for(i=0; i<3; i++){
			randomDice();
		}
		console.log("나온카드 : "+ card);
	};
	
	function randomDice(){
		var cardNmb = Math.floor(Math.random() * 6);
		card[cardNmb] =card[cardNmb]+1 ;
	};
	main(myMoney);
	$('#betButton')
		.click(function hi(){
			   main(myMoney)
			   })
});


