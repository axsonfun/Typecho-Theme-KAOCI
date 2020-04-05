<?php include('head.php'); ?>
<div class="_fake-header"></div>
	<div class="article-container">
		<div class="article" >
			<div class="article-list">
					<a class="article-single show-animate-item">
						<div class="head-img">
							<div class="img-wrap">
								<div class="chief-img monochrome lazy clip-animate-item" data-src="<?php echo $this->getDescription(); ?>"></div>
							</div>
						</div>
						<div class="head-side show-animate-item">
							<div class="article-detail">
								<h3 class="specific-title"><?php $categories=$this->categories;foreach($categories as $cate){echo $cate['name'];} ?></h3>
								<div class="specific-kind"><?php $categories=$this->categories;foreach($categories as $cate){echo $cate['slug'];} ?></div>
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