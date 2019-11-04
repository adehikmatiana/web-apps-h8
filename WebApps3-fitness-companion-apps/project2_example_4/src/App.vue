<!-- Root component -->
<template>
    <!-- we have to have one element sround every thing -->
    <div id="app">
        <div class="cPath"></div>
        <div class="filters-sideBar">
            <h1>{{work}}</h1>
            <div class="dropDown">
                <select id="typeFilter" v-on:change="roomFilterByType" v-model="fiteringOption.type">
                    <option>All types</option>
                    <option v-bind:vlue="type" v-for="type in uniqueTypes">{{type}}</option>
                </select>
                <select name="hi" id="sizeFilter" v-on:change="roomFilterBySize" v-model="fiteringOption.size">
                    <option>All sizes</option>
                    <option v-bind:value="size" v-for="size in uniqueSizes">{{size}}</option>
                </select>
            </div>
            <div class="checkBoxes">
                <ul class="rF-ul">
                    <li class="rf-Li" v-for="rf in roomFacilities">
                        <input class="checkbox" type="checkbox" v-bind:id="rf" v-bind:value="rf" v-model="fiteringOption.checkedFacilities">
                        <label v-bind:for="rf">{{rf}}</label>
                    </li>
                    <hr>
                </ul>
                <ul class="rA-ul">
                    <li class="rA-li" v-for="ra in roomAccessibility">
                        <input class="checkbox" type="checkbox" v-bind:id="ra" v-bind:value="ra" v-model="fiteringOption.checkedAccessibility">
                        <label v-bind:for="ra">{{ra}}</label>
                    </li>
                </ul>

            </div>
        </div>
        <div class="container">
            <!--  Rooms List  -->
            <ul class="roomsList">
                <!--  <li class="room" v-for="room in filteredRooms" v-show="(type==='' || type === room.type)&&(size === ''||size=== room.size)">   -->
                <li class="room" v-for="room in filteredRooms">
                    <!---->
                    <img v-bind:src="room.img" alt="">
                    <div class="Discription">
                        <div class="info">
                            <h2>FavoRoom</h2>
                            <p>{{room.info}}</p>
                            <p class="aboutRoom"><span v-bind:class="room.type">{{room.type}}</span><span v-bind:class="room.size">{{ room.size}}</span></p>
                        </div>
                        <button class="price-btn">{{room.price}}</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./App.js"></script>
<style src="./AppStyle.css"></style>

<style>

</style>
