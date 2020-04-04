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

            <!-- 移动端的菜单list按钮，pc的时候为隐藏状态，在列表icon和close-icon之间切换 -->
            <div class="_m-nav-list" data-cssclass="_m-nav-close">
                <a data-action="toggle" data-args="body" class="lines js-m-navlist">
                    <span class="line first-line"></span>
                    <span class="line second-line"></span>
                    <span class="line third-line"></span>
                </a>
            </div>

        </nav>
    </div>
</header>