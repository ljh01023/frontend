// console.log(window);
// cconsole.log(global);

//Event : Dom : 버튼클릭, 마우스드래그
// alert('hello node');


// 내장 변수 
// 내장 객체  :  process, require

// btn.addEventListener('click', ()=>{})
// 프로그램간 데이터통신에 대한 이벤트발생 
process.on('exit', ()=>{
    console.log('프로그램 종료');
})
process.on('hello', ()=>{
    console.log('hello event 발생');
})
process.on('bye', ()=>{
    console.log('bye event 발생');
})

// 실행환경이 조성되면 2, 4, 5 뒤로 밀릴 수도 있다. 
setTimeout(()=>{
    process.exit(); // click 동작을 한것과 같음 
}, 5000);

setTimeout(()=>{
    process.emit('hello'); // emit : 사용자 이벤트 정의 
}, 2000);

setTimeout(()=>{
    process.emit('bye');
}, 4000);