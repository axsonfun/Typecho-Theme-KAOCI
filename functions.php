<?php
function themeConfig($form) {
	$logo = new Typecho_Widget_Helper_Form_Element_Text('logo', NULL, NULL, _t('LOGO'), _t(''));
    $form->addInput($logo);
	$favico = new Typecho_Widget_Helper_Form_Element_Text('favico', NULL, NULL, _t('favico'), _t(''));
    $form->addInput($favico);
	$miaoshu = new Typecho_Widget_Helper_Form_Element_Text('miaoshu', NULL, NULL, _t('描述'), _t(''));
    $form->addInput($miaoshu);
	$guanjianci = new Typecho_Widget_Helper_Form_Element_Text('guanjianci', NULL, NULL, _t('关键词'), _t(''));
    $form->addInput($guanjianci);
	$stbt = new Typecho_Widget_Helper_Form_Element_Text('stbt', NULL, NULL, _t('首推标题'), _t(''));
    $form->addInput($stbt);
	$stjy = new Typecho_Widget_Helper_Form_Element_Text('stjy', NULL, NULL, _t('首推简要'), _t(''));
    $form->addInput($stjy);
	$stfl = new Typecho_Widget_Helper_Form_Element_Text('stfl', NULL, NULL, _t('首推分类'), _t(''));
    $form->addInput($stfl);
	$sttt = new Typecho_Widget_Helper_Form_Element_Text('sttt', NULL, NULL, _t('首推头图'), _t(''));
    $form->addInput($sttt);
	$stlj = new Typecho_Widget_Helper_Form_Element_Text('stlj', NULL, NULL, _t('首推链接'), _t(''));
    $form->addInput($stlj);
	$name = new Typecho_Widget_Helper_Form_Element_Text('name', NULL, NULL, _t('作者昵称'), _t(''));
    $form->addInput($name);
	$touxiang = new Typecho_Widget_Helper_Form_Element_Text('touxiang', NULL, NULL, _t('作者头像'), _t(''));
    $form->addInput($touxiang);
	$covershow = new Typecho_Widget_Helper_Form_Element_Radio('covershow',
        array(
            "-full" => _t('全宽'),
            "-banner" => _t('横幅'),
			"" => _t('关闭'),
        ), _t('请选择Cover展示方式'), _t('请选择Cover展示方式'));
    $form -> addInput($covershow);
}
function themeFields($layout) {
    $toutu = new Typecho_Widget_Helper_Form_Element_Text('toutu', NULL, NULL, _t('文章头图'), _t(''));
    $layout->addItem($toutu);
	$guanjianci = new Typecho_Widget_Helper_Form_Element_Text('guanjianci', NULL, NULL, _t('关键词'), _t(''));
    $layout->addItem($guanjianci);
	$miaoshu = new Typecho_Widget_Helper_Form_Element_Text('miaoshu', NULL, NULL, _t('描述'), _t(''));
    $layout->addItem($miaoshu);
	$jianyao = new Typecho_Widget_Helper_Form_Element_Text('jianyao', NULL, NULL, _t('简要'), _t(''));
    $layout->addItem($jianyao);
}
?>