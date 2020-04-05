<?php
/**
 * 所有分类
 *
 * @package custom
 */
 ?>
<?php include('head.php'); ?>
<div class="_fake-header"></div>
<!-- 文章详情页 -->
<div class="_main_content"><?php $c='cover'.$this->options->covershow.'.php';include($c); ?></div>
<div class="container">
		<ul class="content-box external-project" style="position:inherit">
		<?php $this->widget('Widget_Metas_Category_List')->to($category); while($category->next()): ?>
		<li class="content-column  showing">
				<div class="content-wrap">
					<a href="<?php $category->permalink(); ?>" class="content-item lazy clip-animate-item content-column-light" style="background-image:url(<?php $category->description(); ?>)">
						<div class="column-name"><?php $category->name(); ?></div>
						<div class="column-type"><?php $category->slug(); ?></div>
					</a>
				</div>
			</li>
    <?php endwhile; ?>
		</ul>
	</div>
<?php include('footer.php'); ?>