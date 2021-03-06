<!--
  Copyright (c) 2019

  Mapping component

  @author Spiros Dimopoulos <sdimopoulos@irisweb.gr>
  @author Georgios Traianos <gtraiano@gmail.com>
  @version 1.0
 -->

<template>
<b-container fluid>
    <b-alert show variant="dark" dismissible>
        {{$t('map prompt')}}
    </b-alert>

    <b-row class="topinfo">
        <b-col/>
    </b-row>

    <!-- display map -->
    <b-row>
        <b-col/>

        <b-col cols=10>
            <GeneralMap
                height="80vh"
                width="100%"
                :zoom="zoom"
                :center="center"
                :mapUrl="mapUrl"
                :mapIconScale="iconScale"
                :markerData="allCityData"
                :chartData="chartData"
                :openWeatherOptions="options"
                :openWeatherTileUrls="owGenerateUrls"
                :activeCityPopup="activeCityPopup"
                :activeOpenWeatherLayers="activeLayers"
                @zoomUpdated="value => $emit('zoomUpdated', value)"
                @centerUpdated="value => $emit('centerUpdated', value)"
                @boundsUpdated="value => $emit('boundsUpdated', value)"
                @activeCityPopupUpdated="value => $emit('activeCityPopupUpdated', value)"
                @activeOpenWeatherLayersUpdated="layers => $emit('activeOpenWeatherLayersUpdated', layers)"
            /><!-- alternatively update data member directly (e.g. zoom = value) -->
        </b-col>

        <b-col/>
    </b-row>

    <b-row class="pt-1">
        <b-col/>
    </b-row>

    <!-- display center, zoom, bounds tags -->
    <b-row align-v="end" class="pb-0 mb-0">
        <b-col/>

        <b-col cols=2>
            <span><strong>{{$t('center')}}</strong></span>
        </b-col>

        <b-col cols=2>
            <span><strong>{{$t('zoom')}}</strong></span>
        </b-col>

        <b-col cols=6>
            <span><strong>{{$t('bounds')}}</strong></span>
        </b-col>

        <b-col/>
    </b-row>

    <!-- display center, zoom, bounds values -->
    <b-row align-v="start" class="pt-0 mt-0">
        <b-col/>

        <b-col cols=2>
            <span style="font-family: 'Roboto Mono', courier; font-size: 90%">{{ centerSimple }}</span>
        </b-col>

        <b-col cols=2>
            <span style="font-family: 'Roboto Mono', courier; font-size: 90%">{{ zoom }}</span>
        </b-col>

        <b-col cols=6>
            <span style="font-family: 'Roboto Mono', courier; font-size: 90%">{{ boundsSimple }}</span>
        </b-col>

        <b-col/>
    </b-row>

</b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import GeneralMap from './GeneralMap.vue'

export default {
    name: 'Map',

    components: {
        GeneralMap
    },

    data () {
        return {
            /* map url and options */
            mapUrl: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom: 6,
            center: { lat: 38.436111, lng: 26.112442 },
            bounds: null,
            iconScale: 1.0,

            activeCityPopup: -1, // city id of displayed popup
          
            options: [], // OpenWeather tiles switch box options
            activeLayers: [], // selected OpenWeather tiles (temperature and clouds by default, checks 'activeLayers' item in localStorage on created()
        };
    },

    created() {
        console.log('Load our data first');
        this.$store.dispatch('allCityData/setAllCityDataAsync');

        this.options = this.populateOptions();

        if(window.localStorage.getItem('activeLayers')) { // load control panel options from local storage
            this.activeLayers = JSON.parse(window.localStorage.getItem('activeLayers'))
        }
        else {
            this.activeLayers = ['temp_new', 'clouds_new'] // default values
        }
    },

    mounted() {
        // map event listeners
        this.$on('zoomUpdated', value => { this.zoom = value; });
        this.$on('centerUpdated', value => { this.center = value; });
        this.$on('boundsUpdated', value => { this.bounds = value; });
        this.$on('activeCityPopupUpdated', value => { this.activeCityPopup = value; });
        this.$on('activeOpenWeatherLayersUpdated', value => { this.activeLayers = value; });
    },

    beforeUpdate() {
        // save control panel options
        window.localStorage.setItem('activeLayers', JSON.stringify(this.activeLayers));

        // update switch box labels on languange change
        this.options = this.populateOptions();
    },

    methods: {
        populateOptions() {
        // switch box options
        // available OpenWeather tiles: [ 'temp_new', 'clouds_new', 'precipitation_new', 'pressure_new', 'wind_new' ], 
            return [
                { text: this.$t('temperature'), value: 'temp_new'} ,
                { text: this.$t('clouds'), value: 'clouds_new' },
                { text: this.$t('precipitation'), value: 'precipitation_new' },
                { text: this.$t('pressure'), value: 'pressure_new' },
                { text: this.$t('wind'), value: 'wind_new' }
            ]
        }
    },

    computed: {
        centerSimple() {
        /* formats center as "(lat, lng)" */
            return `(${this.center.lat.toFixed(6)}, ${this.center.lng.toFixed(6)})`;
        },

        boundsSimple() {
        /* formats bounds as "SW: (lat, lng) NE: (lat, lng)" */
            var out = "";
            if (this.bounds) {
                Object.keys(this.bounds).forEach(
                    (el) => {
                        // add values for each property
                        out += el + ": (" + Object.values(this.bounds[el]).join(", ") + ") ";
                    }
                )
            }

            return out
                .replace("_southWest", "SW")
                .replace("_northEast", "NE");
        },

        owGenerateUrls() {
            /* creates urls for active OpenWeather map layers */
            return this.activeLayers.map(layer => `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${process.env.OW_USER_TOKEN}`)
        },

        // map store state to computed properties
        ...mapGetters('allCityData', {
            allCityData: 'getAllCityData'
        }),
        ...mapGetters('chartData', {
            chartData: 'getChartData'
        })
    }
}
</script>