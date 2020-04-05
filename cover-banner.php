    <section class="_mod_introduce _mod_editor js-mod-introduce">
        <div class="_introduce_title_wrapper show-animate-item">
            <div class="_article_title_wrapper">
                <div class="_introduce_title js-intro-title"><?php $this->title() ?></div>
            </div>
            <div class="_public_line caretColor" ></div>
            <div class="_introduce_tag js-intro-tag" ><?php $this->category(',', false); ?></div>
        </div>
        <div class="_public_paragraph js-intro-content show-animate-item"><?php $this->fields->jianyao(); ?></div>
        <div class="_public_banner js-intro-banner js-defualt-banner show-animate-item"><img class="pic js-pic-banner clip-animate-item block-item" src="<?php $this->fields->toutu(); ?>"></div>
    </section>