<?php
/**
 * 友情链接
 *
 * @package custom
 */
 ?>
<?php include('head.php'); ?>
<div class="_fake-header"></div>
<!-- 文章详情页 -->
<div class="_main_content"><?php $c='cover'.$this->options->covershow.'.php';include($c); ?></div>
<div class="brands-container">
		<ul class="brands-list">
			<?php $this->content(); ?>
		</ul>
</div>
<?php include('footer.php'); ?>