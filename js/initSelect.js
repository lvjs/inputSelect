function initSeclect() {

	//generate by id
	$('#select-test').toSelect({
		"initVal": "by id",
		"editable": "1",
		"seeAsTrans": true,
		"options": [{
			"option1": "option1",
			"option2": "opt2.val",
			"6-12": "上午",
			"option3": "",
			".divider": ".divider",
			".hand-set": "手动设定"
		}]
	});

	//generate by class, the size &initVal&editable between different input-appends are all same, but their options can be different
	selectcs = $('.select-classbased').toSelect({
		"initVal": "by class",
		"editable": "1",
		"options": [{
			"option1": "option1",
			"option2": "option2",
			"option3": "",
			".divider": ".divider",
			".hand-set": "手动设定"
		}, {
			"option1": "hi, let's rock&roll",
			"option2": "la bonjour",
			".divider": ".divider",
			".hand-set": "手动设定"
		}]
	});

	$('.select-classbased')[3].removeLi(1);
	$('.select-classbased')[3].appendLi({
		"new": "New York"
	});
}
$(function () {

	//处理示例代码样式
	$('pre').addClass('prettyprint linenums');
	prettyPrint();

	//生成inputSelect
	initSeclect();
});