<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="logo">
        <img href="logo_p.html" src="@/assets/Markr_w.png" alt="logo" />
      </div>
      <ul id="brand_con">
        <li id="t_1">
          <router-link to="/">
            <span class="item" id="brand_name" contenteditable="true"
              >YOUR BRAND HERE</span
            >
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

<script></script>

<style scoped>
.wrapper .sidebar {
  background: var(--main-primary-color);
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  padding: 20px 0;
  transition: all 0.5s ease;
}

.wrapper .sidebar .logo {
  margin-bottom: 45px;
  text-align: center;
}

.wrapper .sidebar .logo img {
  display: block;
  width: 180px;
  height: auto;
  margin: 10px auto;
  cursor: pointer;
}

.wrapper .sidebar .logo h3 {
  color: #ffffff;
  margin: 10px 0 5px;
}

.wrapper .sidebar .logo p {
  color: var(--main-accent-color);
  font-size: 14px;
}

#brand_con {
  margin-bottom: 50px;
}

.wrapper .sidebar ul li a {
  display: block;
  padding: 13px 30px;
  color: #fff;
  font-size: 16px;
  position: relative;
  font-size: 1.2rem;
  font-weight: normal;
}

.wrapper .sidebar ul li #logo_m {
  color: var(--main-accent-color);
  font-family: Gilroy Extrabold !important;
}

.wrapper .sidebar ul li a .icon {
  color: #dee4ec;
  width: 30px;
  display: inline-block;
}

.active {
  background-color: whitesmoke;
}

.wrapper .sidebar ul li a:hover,
.wrapper .sidebar ul li a.active {
  color: #e9baed;
  border-right: 2px solid #191827;
}

.wrapper .sidebar ul li a.active {
  background-color: whitesmoke;
}

#home {
  font-family: Gilroy Extrabold;
  font-size: 1.4rem;
}

.wrapper .sidebar ul li a:hover .icon,
.wrapper .sidebar ul li a.active .icon {
  color: #191827;
}

.wrapper .sidebar ul li a:hover:before,
.wrapper .sidebar ul li a.active:before {
  display: block;
}

#brand_name,
#brand_name2 {
  font-family: Gilroy Extrabold !important;
  color: var(--main-accent-color);
}

#brand_name {
  cursor: text;
}

#brand_name2 {
  cursor: default;
}

#t_1,
#t_2 {
  border-bottom: 1px solid whitesmoke;
  border-top: 1px solid whitesmoke;
  margin-bottom: 20px;
}
</style>
