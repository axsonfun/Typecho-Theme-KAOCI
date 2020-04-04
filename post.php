<?php include('head.php'); ?>
<div class="_fake-header"></div>
<!-- 文章详情页 -->
<div class="_main_content">
    <!-- 前言模块 -->
    <section class="_mod_introduce _mod_editor js-mod-introduce">

        <div class="_introduce_title_wrapper show-animate-item">
            <div class="_article_title_wrapper">
                <div class="_introduce_title js-intro-title"><?php $this->title() ?></div>
            </div>
            <div class="_public_line caretColor" ></div>
            <div class="_introduce_tag js-intro-tag" ><?php $this->category(',', false); ?></div>
        </div>
        
        <div class="_public_paragraph js-intro-content show-animate-item"><?php $this->fields->jianyao(); ?></div>

        <div class="_public_banner js-intro-banner js-defualt-banner show-animate-item"><img class="pic js-pic-banner clip-animate-item block-item" data-banner-src="<?php $this->fields->toutu(); ?>"></div>
    
    </section>

    <div class="editable" id="editor2">
            <section class="_mod_content _mod_editor"><?php $this->content(); ?>
            </section>
    </div>
    <section class="_mod_stat show-animate-item">
        <div class="_stat_wrapper">
            
            <div class="_article_date">
                <span class="date" style="text-transform:uppercase"><?php $this->date('F j, Y'); ?></span>
            </div>

            <div class="_article_stat">

                <ul class="_stat_list">
                    <li class="_stat_item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" class="_stat_view _stat_icon">
                            <g>
                                <path class="view_svg" d="M19,9c0,2.5-3.5,8-9,8S1,11.5,1,9s3.5-8,9-8S19,6.5,19,9Z"/>
                                <circle class="view_svg" cx="10" cy="9" r="3"/>
                            </g>
                        </svg>
                        <span class="_views">946</span>
                    </li>
                    <li class="_stat_item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18.53" class="_stat_like _stat_icon" id="js-like-0" data-id="403">
                            <g>
                                <path class="like_svg" d="M17.54,9.54A5,5,0,1,0,10,3,5,5,0,1,0,2.46,9.54L10,17.11Z"/>
                            </g>
                        </svg>
                        <span class="_likes js-like-text">10</span>
                    </li>
                </ul>

                <ul class="_stat_share_article js-share-list" data-title="网络上的另一个我 | 00后人设剖析" data-desc="生活是一个戏剧化的表演过程，人设就是这场演出的主角。" data-pic="https://cdn-isux.qq.com/upload/detail/K2A0wIwJrBYvPMM9SPL6r3pKLGgE8jFzwRq0mAIpwpt.png">
                    <li class="share_article_item share_article_item_qzone js-china-ip" data-href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&desc=&summary={desc}&site=&pics={pic}"></li>
                    <li class="share_article_item share_article_item_qq js-china-ip" data-href="http://connect.qq.com/widget/shareqq/index.html?url={url}&title={title}&desc=&summary={desc}&site=isux&pics={pic}"></li>
                    <li class="share_article_item share_article_item_fb" data-href="https://www.facebook.com/sharer/sharer.php?u={url}&amp;t={desc}"></li>
                    <li class="share_article_item share_article_item_twitter" data-href="http://twitter.com/home?status={desc}%20%23{title}%23&amp;url={url}&amp;pic={pic}&amp;desc="></li>
                    <li class="share_article_item share_article_item_sina js-china-ip" data-href="http://service.weibo.com/share/share.php?title={desc}%20%23{title}%23&amp;url={url}&amp;pic={pic}&amp;desc="></li>
                </ul>
            </div>
        </div>
    </section>

    <section class="_mod_authors show-animate-item">
        <div class="_authors_title">CONTRIBUTORS</div>
        <ul class="_authors">
            <li class="_author">
                <img class="pic" src="<?php $this->options->touxiang(); ?>">
                <div class="name"><?php $this->options->name(); ?></div>
            </li>
        </ul>
    </section>

    <!-- 相关文章推荐模块 -->
    <section class="_mod_related show-animate-item">
        <ul class="related-list clearfix" id="list">
            <li class="related-item first-item" data-index='1'>
                <a href="qq-online-character-research.html" target="_blank">
                        <img class="pic clip-animate-item pic-gray" data-scale="0.9" src="https://cdn-isux.qq.com/upload/covers/403_a.jpg"  crossOrigin = 'anonymous' />
                        <img class="pic pic-colorful clip-animate-item" data-scale="0.9" src="https://cdn-isux.qq.com/upload/covers/403_a_src.jpg" crossOrigin = 'anonymous' />

                    
                    <div class="_title-wrapper fade-aniamte-item">
                        <div class="_title-flex">
                            <h3 class="title js-article-title">网络上的另一个我 | 00后人设剖析</h3>
                        </div>
                    </div>
                </a>
            </li>
            <li class="related-item" data-index='2'>
                <a href="THE-PBR-GUIDE-2.html" target="_blank">
                        <img class="pic clip-animate-item pic-gray" data-scale="0.9" src="https://cdn-isux.qq.com/upload/covers/396_a.jpg"  crossOrigin = 'anonymous' />
                        <img class="pic pic-colorful clip-animate-item" data-scale="0.9" src="https://cdn-isux.qq.com/upload/covers/396_a_src.jpg" crossOrigin = 'anonymous' />

                    
                    <div class="_title-wrapper fade-aniamte-item">
                        <div class="_title-flex">
                            <h3 class="title js-article-title">ISUX译文 | The PBR Guide基于物理的渲染指引(下)</h3>
                        </div>
                    </div>
                </a>
            </li>
            <li class="related-item last-item" data-index='3'>
                <a href="THE-PBR-GUIDE-1.html" target="_blank">
                        <img class="pic clip-animate-item pic-gray" data-scale="0.9" src="https://cdn-isux.qq.com/upload/covers/392_a.jpg"  crossOrigin = 'anonymous' />
                        <img class="pic pic-colorful clip-animate-item" data-scale="0.9" src="https://cdn-isux.qq.com/upload/covers/392_a_src.jpg" crossOrigin = 'anonymous' />

                    
                    <div class="_title-wrapper fade-aniamte-item">
                        <div class="_title-flex">
                            <h3 class="title js-article-title">ISUX译文 | The PBR Guide 基于物理的渲染指引(上)</h3>
                        </div>
                    </div>
                </a>
            </li>

        
        </ul>
    </section>

</div>

<div class="share_article_scroll share_article_hide">
    
    <div class="_mod_stat">
        <div class="_article_stat">

            <ul class="_stat_list">
                <li class="_stat_item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" class="_stat_view _stat_icon">
                        <g>
                            <path class="view_svg" d="M19,9c0,2.5-3.5,8-9,8S1,11.5,1,9s3.5-8,9-8S19,6.5,19,9Z"/>
                            <circle class="view_svg" cx="10" cy="9" r="3"/>
                        </g>
                    </svg>
                    <span class="_views">946</span>
                </li>
                <li class="_stat_item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18.53" class="_stat_like _stat_icon" id="js-like-1" data-id="403">
                        <g>
                            <path class="like_svg" d="M17.54,9.54A5,5,0,1,0,10,3,5,5,0,1,0,2.46,9.54L10,17.11Z"/>
                        </g>
                    </svg>
                    <span class="_likes bottom-like-text">10</span>
                </li>
            </ul>

            <ul class="_stat_share_article js-share-list" data-title="网络上的另一个我 | 00后人设剖析" data-desc="生活是一个戏剧化的表演过程，人设就是这场演出的主角。" data-pic="https://cdn-isux.qq.com/upload/detail/K2A0wIwJrBYvPMM9SPL6r3pKLGgE8jFzwRq0mAIpwpt.png">
                <li class="share_article_item share_article_item_qzone" data-href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&desc=&summary={desc}&site=&pics={pic}"></li>
                <li class="share_article_item share_article_item_qq" data-href="http://connect.qq.com/widget/shareqq/index.html?url={url}&title={title}&desc=&summary={desc}&site=isux&pics={pic}"></li>
                <li class="share_article_item share_article_item_fb" data-href="https://www.facebook.com/sharer/sharer.php?u={url}&amp;t={desc}"></li>
                <li class="share_article_item share_article_item_sina" data-href="http://service.weibo.com/share/share.php?title={desc}%20%23{title}%23&amp;url={url}&amp;pic={pic}&amp;desc="></li>
            </ul>
        </div>
    </div>

    
</div>
<!-- 文章详情页 -->

<?php include('footer.php'); ?>