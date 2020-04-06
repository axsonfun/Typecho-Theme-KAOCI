<div class="_m-nav-wrapper">
    <ul class="_nav-items">
	<li class="_nav-item<?php if($this->is('index')): ?> active<?php endif ?>">
        <a href="<?php $this->options->siteUrl(); ?>">ARTICLES</a>
    </li>
	<?php $this->widget('Widget_Contents_Page_List')->to($pages); while($pages->next()): ?>
    <li class="_nav-item<?php if($this->is('page', $pages->slug)): ?> active<?php endif; ?>">
        <a href="<?php $pages->permalink(); ?>"><?php $pages->title(); ?></a>
    </li>
    <?php endwhile; ?>
        <div class="nav-item -m-search">
            <a data-action="toggle" data-args="body" data-cssclass="xxx"></a>
        </div>
    </ul>
</div>

<header>
    <div class="_header-wrapper">
        <nav id="navigator" class="mod_site_nav nav-animate-item js-nav-state">
            <div class="_nav-logo">
                <a href="<?php $this->options->siteUrl(); ?>" class="_nav-flower" style="background:url(<?php $this->options->logo(); ?>) no-repeat center center"></a>
                <!-- <a href="/" class="js-nav-isux _nav-isux"></a> -->
            </div>
            <!-- pc端的结构 -->
			<div class="_nav-wrapper">
                <ul class="_nav-items">
			<li class="_nav-item<?php if($this->is('index')): ?> active<?php endif ?>">
        <a href="<?php $this->options->siteUrl(); ?>">ARTICLES</a>
    </li>
<?php $this->widget('Widget_Contents_Page_List')->to($pages); while($pages->next()): ?>
    <li class="_nav-item<?php if($this->is('page', $pages->slug)): ?> active<?php endif; ?>">
        <a href="<?php $pages->permalink(); ?>"><?php $pages->title(); ?></a>
    </li>
<?php endwhile; ?>
</ul>
            </div>
            <!-- pc端的搜索按钮，移动端时为隐藏状态 -->
            <div class="_nav-search">
                <a data-action="toggle" data-args="body" data-cssclass="xxx"></a>
            </div>
        </nav><nav id="popo" id="navigator" class="mod_site_nav nav-animate-item js-nav-state" style="transform: translate3d(0px, 0px, 0px);">   
			<div class="_nav-wrapper popo">
                <ul class="_nav-items">
			<li class="_nav-item<?php if($this->is('index')): ?> active<?php endif ?>">
        <a href="<?php $this->options->siteUrl(); ?>">ARTICLES</a>
    </li>
<?php $this->widget('Widget_Contents_Page_List')->to($pages); while($pages->next()): ?>
    <li class="_nav-item<?php if($this->is('page', $pages->slug)): ?> active<?php endif; ?>">
        <a href="<?php $pages->permalink(); ?>"><?php $pages->title(); ?></a>
    </li>
<?php endwhile; ?>
</ul>
            </div> 
        </nav>
    </div>
</header>