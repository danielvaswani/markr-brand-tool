<template>
    <div class="wrapper">
        <div class="sidebar">
            <div class="logo">
                <img href="logo_p.html" src="@/assets/Markr_w.png" alt="logo" />
            </div>
            <ul id="brand_con">

                <li id="t_1">
                    <router-link to="/">
                        <span class="item" id="brand_name" contenteditable="true">YOUR BRAND HERE</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/about">
                        <span class="item">About</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/design-principles">
                        <span class="item">Design Principles</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/tone-of-voice">
                        <span class="item">Tone of Voice</span>
                    </router-link>
                </li>
            </ul>
            <ul>
                <li id="t_2">
                    <router-link to="/">
                        <span class="item" id="brand_name2">BRAND IDENTITY</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/logo">
                        <span class="item" id="logo_m">Logo</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/color-palette">
                        <span class="item">Color Palette</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/typography">
                        <span class="item">Typography</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/imagery">
                        <span class="item">Imagery</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/application-examples">
                        <span class="item">Application Examples</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>

</script>

<style src="@/styles/menu_bar.css">
</style>