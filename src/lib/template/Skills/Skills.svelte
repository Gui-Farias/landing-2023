<script>
    import { t } from 'svelte-i18n';
    
    import './style.scss'
</script>


<section class="skills">
    <div class="skills__box skills__lang  animaItemHide itemHideTop">
        <h2>{$t('skill.lang')}</h2>
        <ul class="skills__list">
            <li class="skills__item">
                <div class="icon">
                    <div class=" simple-icons--html5 "></div>
                    <p class="icon-name">HTML5</p>
                </div>
                <div class="progress">
                    <div class="bar html5"></div>
                </div>
                <div class="percentage">95%</div>
            </li>
            <li class="skills__item">
                <div class="icon">
                    <div class="simple-icons--css3 "></div>
                    <p class="icon-name">CSS3</p>
                </div>
                <div class="progress">
                    <div class="bar css3"> </div>
                </div>
                <div class="percentage">90%</div>
            </li>        
            <li class="skills__item">
                <div class="icon">
                    <div class="fa6-brands--square-js"></div>
                    <p class="icon-name">JS</p>
                </div>
                <div class="progress">
                    <div class="bar js"> </div>
                </div>
                <div class="percentage">75%</div>
            </li>          
            <li class="skills__item">
                <div class="icon">
                    <div class="akar-icons--php-fill"></div>
                    <p class="icon-name">PHP</p>
                </div>
                <div class="progress">
                    <div class="bar php"> </div>
                </div>
                <div class="percentage">60%</div>
            </li>
            <li class="skills__item">
                <div class="icon">
                    <div class="mdi--sql-query"></div>
                    <p class="icon-name">SQL</p>
                </div>
                <div class="progress">
                    <div class="bar sql"> </div>
                </div>
                <div class="percentage">50%</div>
            </li>
            <li class="skills__item">
                <div class="icon">
                    <div class="fa6-brands--python"></div>
                    <p class="icon-name">Python</p>
                </div>
                <div class="progress">
                    <div class="bar python"> </div>
                </div>
                <div class="percentage">40%</div>
            </li>          
            <li class="skills__item">
                <div class="icon">
                    <div class="tabler--brand-kotlin"></div>
                    <p class="icon-name">Kotlin</p>
                </div>
                <div class="progress">
                    <div class="bar kotlin"> </div>
                </div>
                <div class="percentage">30%</div>
            </li>          
            <li class="skills__item">
                <div class="icon">
                    <div class="tabler--brand-swift"></div>
                    <p class="icon-name">Swift</p>
                </div>
                <div class="progress">
                    <div class="bar swift"> </div>
                </div>
                <div class="percentage">30%</div>
            </li>                              
        </ul>
    </div>


    <div class="skills__box skills__frame  animaItemHide itemHideTop">
        <h2>{$t('skill.frame')}</h2>
        <ul class="skills__list">
            <li class="skills__item">
                <div class="icon">
                    <div class="devicon-plain--svelte"></div>
                    <p class="icon-name">Svelte</p>
                </div>
                <div class="progress">
                    <div class="bar svelte"> </div>
                </div>
                <div class="percentage">60%</div>
            </li>        
            <li class="skills__item">
                <div class="icon">
                    <div class="akar-icons--react-fill"></div>
                    <p class="icon-name">React</p>
                </div>
                <div class="progress">
                    <div class="bar react"> </div>
                </div>
                <div class="percentage">60%</div>
            </li>      
            <li class="skills__item">
                <div class="icon">
                    <div class="tabler--brand-react-native"></div>
                    <p class="icon-name">ReactNative</p>
                </div>
                <div class="progress">
                    <div class="bar react-native"> </div>
                </div>
                <div class="percentage">40%</div>
            </li>      
            <li class="skills__item">
                <div class="icon">
                    <div class="tabler--brand-threejs"></div>
                    <p class="icon-name">ThreeJS</p>
                </div>
                <div class="progress">
                    <div class="bar threejs"> </div>
                </div>
                <div class="percentage">20%</div>
            </li>                      
        </ul>
    </div>


    <div class="skills__box skills__tools  animaItemHide itemHideTop">
        <h2>{$t('skill.tools')}</h2>
        <ul class="skills__list">
            <li class="skills__item">
                <div class="icon">
                    <div class="simple-icons--tailwindcss"></div>
                    <p class="icon-name">Tailwindcss</p>
                </div>
                <div class="progress">
                    <div class="bar tailwind"></div>
                </div>
                <div class="percentage">90%</div>
            </li>
            <li class="skills__item">
                <div class="icon">
                    <div class="devicon-plain--git"></div>
                    <p class="icon-name">Git</p>
                </div>
                <div class="progress">
                    <div class="bar git"></div>
                </div>
                <div class="percentage">80%</div>
            </li>
            <li class="skills__item">
                <div class="icon">
                    <div class="devicon-plain--wordpress"></div>
                    <p class="icon-name">Wordpress</p>
                </div>
                <div class="progress">
                    <div class="bar wordpress"> </div>
                </div>
                <div class="percentage">70%</div>
            </li> 
            <li class="skills__item">
                <div class="icon">
                    <div class="fa6-brands--figma"></div>
                    <p class="icon-name">Figma</p>
                </div>
                <div class="progress">
                    <div class="bar figma"> </div>
                </div>
                <div class="percentage">70%</div>
            </li>        
            <li class="skills__item">
                <div class="icon">
                    <div class="devicon-plain--photoshop"></div>
                    <p class="icon-name">Photoshop</p>
                </div>
                <div class="progress">
                    <div class="bar photoshop"> </div>
                </div>
                <div class="percentage">60%</div>
            </li>        
              
                                       
        </ul>
    </div>
</section>