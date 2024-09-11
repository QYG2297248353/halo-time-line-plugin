import { definePlugin } from "@halo-dev/console-shared";
import HomeView from "./views/HomeView.vue";
import MainView from "./views/MainView.vue";
import ArticleView from "./views/ArticleView.vue";
import WebsiteView from "./views/WebsiteView.vue";
import FootprintView from "./views/FootprintView.vue";
import SettingsView from "./views/SettingsView.vue";
import GravityUiTimeLine from "~icons/gravity-ui/timeline";
import IconParkOutlineWebPage from "~icons/icon-park-outline/web-page";
import IconParkOutlineHistoryQuery from "~icons/icon-park-outline/history-query";
import UilSetting from "~icons/uil/setting";
import { IconBookRead } from "@halo-dev/components";
import { markRaw } from "vue";

export default definePlugin({
  components: {},
  routes: [
    {
      parentName: "Root",
      route: {
        path: "/timeline",
        name: "TimeLine",
        component: HomeView,
        meta: {
          title: "时间线",
          searchable: true,
          menu: {
            name: "时间线",
            group: "content",
            icon: markRaw(GravityUiTimeLine),
            priority: 0,
            mobile: true,
          },
        },
        children: [
          {
            path: "",
            name: "Main",
            component: MainView,
            meta: {
              title: "首页",
              searchable: false,
            },
          },
          {
            path: "article",
            name: "Article",
            component: ArticleView,
            meta: {
              title: "文章",
              searchable: true,
              menu: {
                name: "文章",
                group: "时间线",
                icon: markRaw(IconBookRead),
                priority: 1,
                mobile: true,
              },
            },
          },
          {
            path: "website",
            name: "Website",
            component: WebsiteView,
            meta: {
              title: "网站",
              searchable: true,
              menu: {
                name: "网站",
                group: "时间线",
                icon: markRaw(IconParkOutlineWebPage),
                priority: 2,
                mobile: true,
              },
            },
          },
          {
            path: "footprint",
            name: "Footprint",
            component: FootprintView,
            meta: {
              title: "足迹",
              searchable: true,
              menu: {
                name: "足迹",
                group: "时间线",
                icon: markRaw(IconParkOutlineHistoryQuery),
                priority: 2,
                mobile: true,
              },
            },
          },
          {
            path: "settings",
            name: "Settings",
            component: SettingsView,
            meta: {
              title: "配置",
              searchable: true,
              menu: {
                name: "配置",
                group: "时间线",
                icon: markRaw(UilSetting),
                priority: 10,
                mobile: true,
              },
            },
          },
        ],
      },
    },
  ],
  extensionPoints: {},
});
