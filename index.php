<?php
/**
 * 这是 Typecho 0.9 系统的一套默认皮肤
 * 
 * @package reDesign
 * @author KicoModo
 * @version 1.0
 * @link https://www.kicomodo.com
 */
 ?>
<?php include('head.php'); ?>
<div class="_fake-header"></div>
	<div class="article-container">
		<div class="article" >
			<div class="article-list">
					<a href="<?php $this->options->stlj(); ?>" class="article-single show-animate-item">
						<div class="head-img">
							<div class="img-wrap">
								<div class="chief-img monochrome lazy clip-animate-item" data-src="<?php $this->options->sttt(); ?>"></div>
							</div>
						</div>
						<div class="head-side show-animate-item">
							<div class="article-detail">
								<h3 class="specific-title"><?php $this->options->stbt(); ?></h3>
								<div class="specific-kind"><?php $this->options->stfl(); ?></div>
								<p class="specific-introduce" title="<?php $this->options->stjy(); ?>"><?php $this->options->stjy(); ?></p>
							</div>
						</div>
					</a>			
<?php while($this->next()): ?>
    <a href="<?php $this->permalink() ?>" class="article-single show-animate-item">
						<div class="head-img">
							<div class="img-wrap">				
								<div class="chief-img monochrome lazy clip-animate-item" data-src="<?php $this->fields->toutu(); ?>"></div>					
							</div>
						</div>
						<div class="head-side show-animate-item">
							<div class="article-detail">
								<h3 class="specific-title"><?php $this->title() ?></h3>
								<div class="specific-kind"><?php $this->category(',', false); ?></div>
								<p class="specific-introduce" title="<?php $this->fields->jianyao(); ?>"><?php $this->fields->jianyao(); ?></p>
							</div>
						</div>
					</a>
<?php endwhile; ?>
			</div>
			<?php include('pagenav.php'); ?>
		</div>
	</div>
<?php include('footer.php'); ?>