<template>
  <v-footer class="bg-grey footer">
    <v-row>
      <v-col cols="12" md="3" sm="6">
        <p class="text-uppercase font-weight-bold text-name">Uppass Books</p>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <ul class="list">
          <li><a href="#" class="title-list">About Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Corporate Info</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <ul class="list">
          <li><a href="#" class="title-list">Our Services</a></li>
          <li><a href="#">Tracking Order</a></li>
          <li><a href="#">Returning Policy</a></li>
          <li><a href="#">Refund Policy</a></li>
        </ul>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <ul class="list">
          <li><a href="#" class="title-list">Contact</a></li>
          <li>
            <span class="mail">
              <v-icon left class="mr-5">fas fa-envelope</v-icon
              >uppass.io@gmail.com</span
            >
          </li>
          <li>
            <span class="mail">
              <v-icon left class="mr-5">fas fa-phone</v-icon
              >055-555555</span
            >
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.footer {
  widows: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-name {
  padding: 0.8rem;
  color: #ffeb3b;
  letter-spacing: 4px;
}

.title-list {
  color: #000 !important;
  font-weight: bold;
  font-size: 1rem !important;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.list li {
  list-style-type: none;
  padding: 0.8rem;
}

.list a {
  text-decoration: none;
  color: rgb(91, 91, 91);
}

.list a:hover {
  color: #484846;
}

.mail{
  color: #484846;
  word-wrap: break-word;

  white-space: nowrap;
}
</style>
