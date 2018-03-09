// 데이터 객체
var datas = { a: 1, b: 'hello' }

// Vue인스턴스에 데이터 객체를 추가합니다.
var vm = new Vue({
  el: '#vm',
  data: datas
});

// 같은 객체를 참조합니다!
console.log(vm.a === datas.a);

// 속성 설정은 원본 데이터에서 영양을 미칩니다.
vm.a = 2;
console.log(datas.a);

// ... 당연하게도
datas.a = 3;
console.log(vm.a);

// 데이터가 변경되면 화면은 다시 렌더링 된다.
// 유념할 점은, data 에 있는 속성들은 인스턴스가 생성될  때 존재한 것들만 반응형이라는 것이다.
vm.b = 'hi';
// 이와 같이 새 속성을 추가해도 화면이 갱신되지 않는다.
// data에 데이터 추가후 수정이 아니라면 아예 오류가 난다(값은 정상 출력 됨.).

// 어떤 속성이 나중에 필요하다는 것을 알고 있으며, 빈 값이거나 존재하지 않은 상태로 시작한다면 아래와 같이 초기값을 지정할 필요가 있다.
// data: {
//   newTodoText: '',
//   visitCount: 0,
//   hideCompletedTodos: false,
//   todos: [],
//   error: null
// }

// 여기에서 유일한 예외는 Object.freeze () 를 사용하는 경우이다.
// 이는 기존 속성이 변경되는 것을 막아 반응성 시스템이 추적할 수 없다는 것을 의미한다.

var obj = {
  foo: 'bar'
}

Object.freeze(obj);

new Vue({
  el: '#app',
  data () {
    return {
      obj
    }
  }
})

var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
});  

console.log(vm.$data === data);
console.log(vm.$el);
console.log(document.getElementById('example'));
console.log(vm.$el === document.getElementById('example'));

vm.$watch('a', function(newVal, oldVal) {
  // 'vm.a'가 변경되면 호출 됩니다.
  console.log(`a is changed to ${ vm.a }`);
});

