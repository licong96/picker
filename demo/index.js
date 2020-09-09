var nameEl = document.getElementById('name');

var data1 = [
	{
		text: '15分钟',
		value: 1
	}, {
		text: '30分钟',
		value: 2
	}, {
		text: '45分钟',
		value: 2
	}, {
		text: '60分钟',
		value: 2
	}, 
];

var data2 = [
	{
		text: '3天',
		value: 1
	},
	{
		text: '5天',
		value: 2
	},
	{
		text: '7天',
		value: 3
	},
	{
		text: '9天',
		value: 4
	},
];

var picker = new Picker({
  id: 'c-picker',
	data: [data1, data2],
	selectedIndex: [0, 0],
	title: ''
});

const cPickerEl = document.getElementById('c-picker');
const wheelEl = cPickerEl.getElementsByClassName('wheel-hook');
const wheelItem = [
  wheelEl[0].getElementsByClassName('wheel-item'),
  wheelEl[1].getElementsByClassName('wheel-item')
];

picker.on('picker.change', function (index, selectedIndex) {
  console.log('change', index, selectedIndex);
  // const currentIndex = this.wheels[index].getSelectedIndex();
  // console.log('currentIndex', currentIndex, i);
  // const currentWheel = wheelItem[index];
  // for (let j = 0; j < currentWheel.length; j++) {
  //   removeClass(currentWheel[j], 'active')
  // }
  // addClass(currentWheel[selectedIndex], 'active');
});

function addClass(el, className) {
	if (hasClass(el, className)) {
		return;
	}

	let newClass = el.className.split(' ');
	newClass.push(className);
	el.className = newClass.join(' ');
};

function removeClass(el, className) {
	if (!hasClass(el, className)) {
		return;
	}

	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
	el.className = el.className.replace(reg, ' ');
};

function hasClass(el, className) {
	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
	return reg.test(el.className);
};



// var nameEl = document.getElementById('chose');

// var first = []; /* 省，直辖市 */
// var second = []; /* 市 */
// var third = []; /* 镇 */

// var selectedIndex = [0, 0, 0]; /* 默认选中的地区 */

// var checked = [0, 0, 0]; /* 已选选项 */

// function creatList(obj, list){
//   obj.forEach(function(item, index, arr){
//   var temp = new Object();
//   temp.text = item.name;
//   temp.value = index;
//   list.push(temp);
//   })
// }

// creatList(city, first);

// if (city[selectedIndex[0]].hasOwnProperty('sub')) {
//   creatList(city[selectedIndex[0]].sub, second);
// } else {
//   second = [{text: '', value: 0}];
// }

// if (city[selectedIndex[0]].sub[selectedIndex[1]].hasOwnProperty('sub')) {
//   creatList(city[selectedIndex[0]].sub[selectedIndex[1]].sub, third);
// } else {
//   third = [{text: '', value: 0}];
// }

// var picker = new Picker({
// 	data: [first, second, third],
//   selectedIndex: selectedIndex,
// 	title: '地址选择'
// });

// picker.on('picker.select', function (selectedVal, selectedIndex) {
//   var text1 = first[selectedIndex[0]].text;
//   var text2 = second[selectedIndex[1]].text;
//   var text3 = third[selectedIndex[2]] ? third[selectedIndex[2]].text : '';

// 	nameEl.innerText = text1 + ' ' + text2 + ' ' + text3;
// });

// picker.on('picker.change', function (index, selectedIndex) {
//   if (index === 0){
//     firstChange();
//   } else if (index === 1) {
//     secondChange();
//   }

//   function firstChange() {
//     second = [];
//     third = [];
//     checked[0] = selectedIndex;
//     var firstCity = city[selectedIndex];
//     if (firstCity.hasOwnProperty('sub')) {
//       creatList(firstCity.sub, second);

//       var secondCity = city[selectedIndex].sub[0]
//       if (secondCity.hasOwnProperty('sub')) {
//         creatList(secondCity.sub, third);
//       } else {
//         third = [{text: '', value: 0}];
//         checked[2] = 0;
//       }
//     } else {
//       second = [{text: '', value: 0}];
//       third = [{text: '', value: 0}];
//       checked[1] = 0;
//       checked[2] = 0;
//     }

//     picker.refillColumn(1, second);
//     picker.refillColumn(2, third);
//     picker.scrollColumn(1, 0)
//     picker.scrollColumn(2, 0)
//   }

//   function secondChange() {
//     third = [];
//     checked[1] = selectedIndex;
//     var first_index = checked[0];
//     if (city[first_index].sub[selectedIndex].hasOwnProperty('sub')) {
//       var secondCity = city[first_index].sub[selectedIndex];
//       creatList(secondCity.sub, third);
//       picker.refillColumn(2, third);
//       picker.scrollColumn(2, 0)
//     } else {
//       third = [{text: '', value: 0}];
//       checked[2] = 0;
//       picker.refillColumn(2, third);
//       picker.scrollColumn(2, 0)
//     }
//   }

// });

// picker.on('picker.valuechange', function (selectedVal, selectedIndex) {
//   console.log(selectedVal);
//   console.log(selectedIndex);
// });

// nameEl.addEventListener('click', function () {
// 	picker.show();
// });



