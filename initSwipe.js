
function initSwipe(target){
	
	let startX, startY, endX, endY, currentX;
	
	// タッチ開始時の座標を記録
	target.addEventListener('touchstart', (e) => {
		const touch = e.touches[0];
		startX = touch.clientX;
		startY = touch.clientY;
	});
	target.addEventListener('touchmove', (e) => {
		// e.preventDefault();
		
		currentX = e.touches[0].clientX - startX;
		
		// // 要素をスワイプ方向に移動
		// if (Math.abs(currentX) > 10) {
		//     element.style.transform = `translateX(${currentX}px)`;
		// }
	});
	// タッチ終了時の座標を記録し、スワイプかクリックか判定
	target.addEventListener('touchend', (e) => {
		const touch = e.changedTouches[0];
		endX = touch.clientX;
		endY = touch.clientY;
		
		// 移動距離を計算
		const diffX = endX - startX;
		const diffY = endY - startY;
		
		// 意図しないブレを考慮し、移動距離が一定以上なら「スワイプ」とみなす
		if (Math.abs(diffX) > 330) {
			if (diffX > 0) {
				document.querySelectorAll(".tabbtns").forEach(element => {
					element.classList.remove("activetabbtn");
				});
				document.querySelectorAll(".tabs").forEach(element => {
					element.classList.remove("activetab");
				});
				document.querySelector(`#effectiveTable`).classList.add("activetab");
				document.querySelector(`#effectiveTable`).classList.add("slideInFromRight");
				document.querySelector("#tabbtn-effectiveTable").classList.add("activetabbtn");
			} else {
				document.querySelectorAll(".tabbtns").forEach(element => {
					element.classList.remove("activetabbtn");
				});
				document.querySelectorAll(".tabs").forEach(element => {
					element.classList.remove("activetab");
				});
				document.querySelector(`#quickReference`).classList.add("activetab");
				document.querySelector("#tabbtn-quickReference").classList.add("activetabbtn");
				document.querySelector("#quickReference").classList.add("slideInFromLeft");
			}
		} else {
			// element.style.transform = "translateX(0)"
			// 移動距離が少ない場合は「クリック（タップ）」とみなす
			// console.log('クリックされました');
			// TODO: クリック時の処理
		}
	});
	
}