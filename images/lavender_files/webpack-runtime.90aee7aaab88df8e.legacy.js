!function(){"use strict";var e,a,c,f,d,b,o={},t={};function r(e){if(t[e])return t[e].exports;var a=t[e]={id:e,loaded:!1,exports:{}};return o[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=o,r.x=function(){},r.microfeA=function(e,a){var c,f,d=e.exports;function b(){c(d)}var o=e.exports=new Promise((function(e,a){c=e,f=a}));a().then((function(){if(e.exports.then){var a=e.exports;e.exports=o,a.then(b,f)}else b()})).catch(f)},function(){var e={0:{version:"1.0.0"},1:{version:"0.5.0"},2:{version:"2.2.0"},3:{version:"2.2.0"},4:{version:"4.0.2"},5:{version:"2.3.1"}},a={0:"shopee__cart-prefetch-singleton",1:"shopee__domain",2:"shopee__language",3:"shopee__settings",4:"shopee_common__currency",5:"shopee_common__time"},c={type:"module",requester:"pcmall-static"};if(r.microfeM=function(f){return Platform.getModule(a[f],Object.assign({},c,e[f]))},r.microfeI=function(f){return Platform.getModuleImmediate(a[f],Object.assign({},c,e[f]))},window&&window.__DECKER_HOOK__){var f=window.__DECKER_HOOK__,d=function(){f.sendToDevtools("MFE_FEDERATED_MODULES_INFO",{base:c,map:e,name:a})};f.on("MFE_RETRIEVE_FEDERATED_MODULES_INFO",d),d()}}(),r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,{a:a}),a},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(c,f){if(1&f&&(c=this(c)),8&f)return c;if("object"==typeof c&&c){if(4&f&&c.__esModule)return c;if(16&f&&"function"==typeof c.then)return c}var d=Object.create(null);r.r(d);var b={};e=e||[null,a({}),a([]),a(a)];for(var o=2&f&&c;"object"==typeof o&&!~e.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((function(e){b[e]=function(){return c[e]}}));return b.default=function(){return c},r.d(d,b),d},r.d=function(e,a){for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(a,c){return r.f[c](e,a),a}),[]))},r.u=function(e){return({23:"EReceiptForm68",91:"address.TH_address_to_zip-live-json",182:"ShopeeMart",197:"EReceiptForm96",215:"EReceiptForm37",293:"PageDownloadApp",369:"PageShareExpiration",394:"EReceiptForm98",456:"PageItemRatingsOld",462:"PageFlashSale",473:"RouteRedirectToMyAccountPayment",561:"PageVerifyPassword",566:"PageVerifyEmail",569:"InformationBlockES",601:"ShopeeFoodPaymentSelectionPage",639:"InstallmentFilter",642:"BannerSDKPlayground",684:"PageRatings",773:"EReceiptForm63",809:"PageSimilarProducts",919:"EReceiptForm177",975:"InformationBlockPL",986:"InformationBlockBR",1028:"EReceiptForm90",1036:"EReceiptForm164",1086:"ResetPasswordByEmail",1110:"EReceiptForm29",1136:"SignupByOTP",1160:"EReceiptForm149",1178:"PageDailyDiscoverCampaign",1179:"InformationBlockVN",1200:"PageOAuth",1235:"EReceiptForm14",1242:"InformationBlockID",1281:"SearchPage",1286:"PFBCookieSetter",1299:"SearchInMicrositePage",1303:"EReceiptForm60",1331:"PageRedirectToFlashSaleSMart",1337:"PCSummaryNotificationContainer",1430:"PaymentSelectionPage",1466:"PageVerifyLinkReceiver",1473:"EReceiptForm157",1531:"EReceiptForm74",1575:"RedirectRwBrowseDeal",1584:"EReceiptForm163",1615:"RouteRedirectForSBrowser",1714:"UserPage",1918:"EReceiptForm173",1951:"EReceiptForm1",1968:"PageDPPaymentSelection",1981:"ResetPassword",2009:"EReceiptForm103",2063:"PageAuthenticationIVS",2142:"LoginByPassword",2161:"PageAddressSelectionDemo",2162:"address.TW-live-json",2412:"PageBranchReselection",2629:"EReceiptForm33",2718:"EReceiptForm5",2793:"EReceiptForm44",2810:"address.ID-live-json",2845:"PageIdentityVerification",2854:"RedirectToCoinsHistory",2964:"EReceiptForm171",2968:"PageCheckoutOld",2975:"hash",3046:"InformationBlockCL",3053:"address.MX-live-json",3121:"PageSVSPaymentSelection",3149:"PageSearchUser",3187:"PageUserGDPRCookieSettings",3269:"EReceiptForm27",3283:"EReceiptForm153",3395:"PageShopHotDeals",3445:"EReceiptForm155",3467:"PageDailyDiscover",3507:"PageUserAddress",3543:"EReceiptForm170",3573:"EReceiptForm19",3621:"PageKYCFreeShipping",3665:"EReceiptForm95",3707:"EReceiptForm166",3754:"PageGenericDownloadApp",3758:"PageUserPassword",3785:"InformationBlockTH",3917:"CoinExpirationPage",3976:"AccountDemoPage",4001:"OrderDetailPage",4006:"InformationBlockFR",4031:"SearchResultVoucher",4044:"address.TH_address_to_zip-en-live-json",4075:"EReceiptForm26",4106:"AccountAddPassword",4147:"PageSeoBrand",4166:"EReceiptForm107",4200:"EReceiptForm158",4255:"PageVerifyQr",4325:"MyAccountPage",4343:"PageAuthenticationShopeePay",4344:"PageLINEIntegration",4376:"PageAllCategories",4406:"address.PH-live-json",4438:"ShopeeMartSearchPage",4518:"DebugInformation",4557:"PageIntegrationAddressCallback",4571:"PageUserGDPR",4615:"PageWelcomePackage",4643:"EReceiptForm85",4702:"RouteRedirectToHome",4794:"AccountChangePhoneNumber",4812:"address.CL-live-json",4859:"ShopeeMartAddOnDealsPage",4864:"EReceiptForm3",4994:"EReceiptForm47",5144:"LoginByWhatsappToken",5174:"SocialBindAccount",5189:"EReceiptForm75",5216:"address.ID_address_to_zip-live-json",5279:"EReceiptForm20",5322:"LoginByOTP",5345:"EReceiptForm77",5366:"PageAccountRedirect",5375:"AccountChangePassword",5461:"EReceiptForm8",5479:"ComponentBuilderPlayground",5483:"InformationBlockPH",5500:"ProductLabelLanding",5703:"address.TH-en-live-json",5823:"PCLazyFooter",5833:"EReceiptForm67",5847:"address.TW_address_to_zip-live-json",5873:"address.TH-live-json",5959:"InformationBlockSG",6057:"SearchResultFilterApplied",6061:"PageVerifyOTP",6081:"InformationBlockAR",6082:"address.CO-live-json",6109:"EReceiptForm51",6147:"EReceiptForm45",6184:"ShopeePlayPaymentSelectionPage",6201:"EReceiptForm80",6207:"WidgetGallery",6222:"EventPage",6326:"LogisticAddressModal",6368:"EReceiptForm82",6485:"AccountChangePhoneNumberV2",6539:"LogisticsSelectionModal",6547:"AccountAddPhoneNumberV2",6743:"LoginByQRCode",6756:"address.VN-live-json",6776:"InformationBlockIN",6791:"EReceiptForm40",6862:"EReceiptForm59",6922:"PageReportUser",6929:"VLibrasIntegration",6931:"EReceiptForm79",6980:"EReceiptForm34",6983:"EReceiptForm87",7026:"MarketplacePaymentPage",7116:"EReceiptForm57",7119:"shopee-phonelib",7171:"PageVerifyEmailLinkSender",7173:"EReceiptForm22",7372:"ProductTagFilter",7412:"EReceiptForm102",7464:"HotWordList",7537:"PageAddressDemo",7565:"WebTrackerBridge",7598:"PageIntegrationTWEInvoice",7761:"PageBrandSale",7776:"PageVerifyLinkSender",7793:"CookieConsentBannerV2",7839:"InformationBlockMY",7905:"EReceiptForm88",7917:"EReceiptForm62",7925:"address.TW_zip_to_address-live-json",7978:"EReceiptForm91",8009:"PageAntiCrawlerTest",8026:"EReceiptForm36",8035:"PageSearch",8122:"address.BR-live-json",8130:"SearchResultCorrected",8204:"EReceiptForm160",8225:"FooterInfoBlockPreview",8257:"InformationBlockTW",8293:"MartSearchNoResultGeneral",8341:"EReceiptForm161",8501:"ShopRecommendedForYouPage",8505:"EReceiptForm70",8534:"PageVerifyEmailLinkReceiver",8616:"InformationBlockMX",8623:"InformationBlockCO",8637:"PageUserEmail",8681:"EReceiptForm12",8696:"ShopSearchPage",8713:"PageLKPPSSO",8729:"PageGDPRCookieGuestSetting",8731:"EReceiptForm31",8798:"PageFlashSaleSMart",8850:"EReceiptForm54",8912:"EReceiptForm15",8953:"ProgramForm",8958:"EReceiptForm9",8970:"EReceiptForm11",9020:"SignupKyc",9090:"PageUserPayment",9196:"address.SG-live-json",9211:"EReceiptForm52",9276:"PageNotification",9358:"AccountAddPhoneNumber",9393:"PageUserPhone",9607:"EReceiptForm6",9611:"PageDevtool",9754:"EReceiptForm56",9802:"address.MY-live-json",9905:"AccessibilityDemoPage",9924:"PageCustomKYCTW",9936:"EReceiptForm83"}[e]||e)+"."+{23:"99b1fe1dea50f939",56:"6a22643073e7f471",91:"8bfe403d725a4a49",182:"b1bdcd24adbd34c7",197:"aebea87de9432c3b",215:"6c915d58e8e2cc25",293:"25e3625ce59fdcf3",369:"8b8d59de83f7178d",385:"f6c5962d04e3da49",394:"9ccaa81194e66237",412:"7122e12004cdff27",421:"4e92696297ab5fad",456:"6dccb25f47136c04",462:"891740de02176ab1",473:"ea72f15a0a2050e0",561:"80463de7bcb39ab6",566:"cefc3b4542f50ef4",569:"4242e3561f2ef1a5",601:"3db7bd7eda47fc88",639:"45aa6b217b69a830",642:"c19a5122900661a0",684:"ad6968dbc9d54d8c",773:"a2dee53c7aa8038a",809:"067c269688166139",884:"f45b3fa72e51b1c2",919:"da38a614c2b720ef",952:"e116f19bf27a53c3",967:"90d706b23b9bf50d",975:"646c8e36addcf930",986:"b515aef9f87269c1",1028:"bc76c67ff89864ed",1036:"c0e6a2f51585a8df",1086:"97f2670a34b6db2a",1110:"fa57cdcf31006f61",1136:"02b1be4fce59faf6",1160:"10c3d7021b11a55d",1178:"0b80ff0680c04a39",1179:"9d42398e5ba7d57d",1200:"af67ba28d70180ff",1209:"a38922d8e8accb78",1235:"77166e10da2380cc",1242:"bc4eca14aa201794",1281:"e04398605bf8569a",1286:"6ff4d59c1da7d0c6",1299:"569c391b2a2e60bf",1303:"609b9a74af685044",1331:"f96b8f968800da5d",1337:"171bc5ccc6fe4b44",1430:"41637239e394debc",1466:"4235ee5f615db4b2",1473:"f1d2185c84121efc",1531:"2c145f95ffc9b909",1575:"7c3feda931cd723c",1584:"e4a4ea3282639a88",1587:"36a07f5303357cb5",1591:"4e655f561baa44eb",1615:"2091e0facb10d3cb",1640:"8ea2f65e1a057b81",1714:"0314521638fc12f4",1723:"6beef237cec5de95",1918:"f73f33eceb36464c",1951:"451c85273b719767",1968:"225167f521b562aa",1981:"3eb45ebe34d9a5b0",2009:"ef7190155be2e592",2021:"18257d9f91b43efe",2063:"63ac471a370733cd",2142:"1c10d84054bc832f",2161:"23577a857aad8491",2162:"c0742e33947af172",2193:"7b2ec81149dcf864",2281:"e8c7bf1df6f84a33",2381:"f2cdd736652487be",2387:"ceeb4f59c2a9a56f",2412:"e2609a1a4d9bf6a3",2629:"1575787a7e146c1b",2718:"ec43b2a047f249f7",2793:"4c3f3b102a30b4a8",2800:"97a5654d47eff6a5",2810:"a713f4bf7f62c481",2845:"835de3245fce0b11",2854:"9ba7f1c5a0b1738f",2947:"8ca9b64f1e3cf3d8",2964:"a25401a33b51ec82",2968:"689163b6e8f249a4",2975:"998b9630d8c24f8c",3046:"d99374965b0ac2b7",3053:"24a09e3b25b1f5e0",3121:"4097c910bde1ffaf",3149:"4cf54ecbba0d1d31",3187:"af452c57f583a76d",3214:"51997f1eff8a43c4",3269:"77a76b03d57c2c16",3283:"fa87c0b012df6807",3285:"9f3959f33f18cf40",3298:"b79fe88a87a0a24f",3304:"1c007ec77aa9df21",3395:"7d131eb24a09c601",3404:"ef12fb3f245f56c0",3445:"0ea04fe4ff79affa",3467:"f3231737e6cc6c58",3507:"875ea4d4c1683703",3543:"0bfe9083681c086b",3573:"ce9ac84a09ee297d",3621:"89d83148befb444b",3665:"553ab94bcfc03dfa",3707:"009aa7b514c1f5f9",3754:"aaf66b26df52e145",3758:"f68a77e6f25cb4df",3785:"5548925227704304",3917:"d94cbbba5b4f8188",3961:"851e4b1f7d293036",3976:"d398301d4a362ebd",4001:"d33c7686627d50f3",4006:"cb355ce23a8cd7cd",4031:"f9d0d34860245bf6",4044:"b472890eb748ce58",4075:"55836c0a24d1019d",4106:"934b460e38f73a9f",4147:"46526ba056f4e986",4159:"d1a85fa731e0043b",4166:"fd95b0875d02f759",4200:"6154eff5f94c187f",4255:"352497777fb09cc7",4297:"4e08c6ca44ed5698",4325:"c06a49bea73a3d10",4343:"44713f67c86e9681",4344:"a9a417f5d8e59a40",4376:"a3266e3a6eaa81f0",4406:"948e2ebfc95670ab",4438:"17555e945c4be837",4495:"2267787221e86b43",4518:"71543414b7078a28",4549:"ab8e40f15ebfabe4",4557:"f665d4f30270db78",4571:"dc19565399486cba",4572:"723c45967c387cc1",4615:"0194aea8f54b9a3e",4643:"253712de23fe5868",4702:"041798d85e4a46da",4721:"3869b30f9813b163",4794:"df6c1296f7efba7a",4812:"247fa88d7e245893",4859:"6613ab86be3000df",4864:"1a8fa00bd03b7fbb",4970:"9eed3217499fa166",4984:"d672d6752288c161",4994:"ce6a86f509b9654c",5081:"6f23711ab5919aa6",5098:"257c17aa328500a9",5144:"6ecd7316efb131df",5174:"b6294ed0e941a6f5",5188:"b043b2cfb67c11f5",5189:"465514465e13180c",5216:"0f0c3ae4715bd486",5279:"7edf32f86d9277b4",5292:"743debbd3697268e",5322:"94e3f455a6f62a31",5345:"8981965dce26bccf",5366:"72adc0f80ab6cbf7",5375:"1986f955ce9bb45f",5430:"7a1bb772d6d42c65",5461:"c8cd7c37cad8b458",5479:"de5ba94e3c2d13e9",5483:"5e399fefb9b2987b",5500:"ce9c2d3452d6ff8f",5512:"7dc94a560294b3e7",5559:"74d38c50e2cbf5a2",5703:"98facba037cb91ec",5818:"9bc8004bada19137",5823:"ca789bc033979440",5833:"13e0fd810d826909",5847:"5d3b8e339bd38dd9",5873:"a13acc9854434709",5959:"c62633cf97b012b3",6057:"ee6536517815539f",6061:"fa91410fa3f1bf01",6081:"67c3b499eee1eb60",6082:"13d9f9381e01baf7",6109:"299eda29f616d734",6147:"ad666ef3a8f8c46f",6184:"9a28f6265d99df37",6201:"432558ed232f57ef",6206:"c733797ca50646d4",6207:"3f2f7bb0dc03220b",6222:"12cf8f54b56a9303",6326:"e29459a51aa3438a",6368:"260733751f1395ba",6485:"e596919a62c07604",6539:"a817a243c0119c4b",6547:"bd0f75a98b968b1e",6645:"940a468c89b26414",6743:"e7efbd1df6ca83db",6756:"cd62a8dda8b9b4f4",6776:"d2aaf86cbcb1eec5",6791:"08050185f17845da",6862:"e9e5350b17d5d32f",6922:"28affb4ad620471f",6929:"1dd4fe6080d06a6e",6931:"bc2b035ad5ce43e6",6980:"3c267b8fe128762f",6983:"d73806a740b7b259",7026:"6905c226dbe75f10",7045:"a7e9f0aa226ef3bc",7116:"7b2691bb8874e00d",7119:"53b626c9aa5c815f",7168:"3ded073cb1359baa",7171:"15d4f0e1a190cc30",7172:"8f31680bc0166dae",7173:"f1aa898221ef33cf",7258:"6022530a45fc3af0",7372:"c9a9cee664e2133d",7412:"eddbc2b0c4a48fee",7464:"e675fd506042c5a4",7537:"ce6d8b7a692d4d7d",7565:"bdd26c00ad6bae44",7598:"9925ca5d819ffb30",7611:"39849010fd08b65a",7761:"699503427b72aa0b",7766:"70f645093f7403b5",7776:"66302ab93b08f2d5",7793:"8282c6baf00b9023",7839:"bcc1c90a698225cc",7905:"098aa36ba1229705",7917:"c05cdaf1d78d7862",7925:"a927e810fec8403f",7978:"38d3fd94d2ffbe8c",8009:"55caa5b7a04d4dc8",8026:"fc962bdb7013b6e1",8035:"5248d3a9566eea46",8121:"89c20900cb91667f",8122:"ab9784048f5ce44b",8130:"ff291e30bee8ea46",8204:"ec259e10940f0da1",8225:"03ffb85f752b3634",8257:"f2ba731cbb5b636c",8293:"1e57844228074fe5",8341:"87a70d7ccb2b4739",8407:"b23e3fc7be948984",8492:"04b7cf7a7d80b083",8501:"f419c3e6b5a08fbc",8505:"a06f6b90a5b78b3d",8534:"261eeee698807175",8577:"974567418ff8a4ea",8616:"8386d929d5e4fcb8",8623:"2a18bc0f0c37c695",8637:"a25127c1b9913048",8661:"0102c70c3069caf6",8665:"222b66151707c253",8681:"730027d235a71db7",8696:"9d9a20bbd899645e",8703:"b492aba9686d73d4",8713:"7c1e82434739189b",8714:"6d1251ecafe1fca1",8729:"6c1de6805b768bfd",8731:"16ee4eea259b0843",8781:"acdbcf307bf0c158",8798:"b5c7a3de8f067e99",8850:"3cc12452ae53427d",8885:"02c329f68f91c1de",8912:"54ed2c4d4513b0b3",8953:"29cc529d10af6717",8958:"4006ed53252ccb37",8970:"c19abb080a33b262",9020:"d1e81e2f5b1ba7a7",9090:"1c7fe58362c97188",9195:"8e16c3eb044ed419",9196:"ada43bb54e56da16",9211:"80042b0c494e6580",9276:"1a4ae3fb5a2e41be",9327:"3c0397c9532935e5",9358:"e09798aa8a5e64c1",9393:"2252ba40b60d743d",9458:"7b2b219890524043",9469:"fc80568a18260b07",9511:"8a5b5d7b524cc69f",9607:"a0163b5be0e96d6a",9608:"c5a2b51751412576",9611:"17265259f0da7217",9669:"1977a88ba2282e79",9685:"e28567a320934b21",9754:"2c871443d1a09666",9802:"261816bf3de981e8",9905:"07885acffd538a86",9924:"f33cc8b599403baf",9936:"6888250ec9d977a5",9948:"2f2f9f11fa4365ab"}[e]+".legacy.js"},r.miniCssF=function(e){return 4296===e?"bundle.e86e1eaf262def42.legacy.css":e+"."+{215:"6c915d58e8e2cc25",293:"25e3625ce59fdcf3",369:"8b8d59de83f7178d",561:"80463de7bcb39ab6",566:"cefc3b4542f50ef4",569:"4242e3561f2ef1a5",601:"3db7bd7eda47fc88",642:"c19a5122900661a0",684:"ad6968dbc9d54d8c",773:"a2dee53c7aa8038a",809:"067c269688166139",919:"da38a614c2b720ef",952:"e116f19bf27a53c3",975:"646c8e36addcf930",986:"b515aef9f87269c1",1028:"bc76c67ff89864ed",1036:"c0e6a2f51585a8df",1086:"97f2670a34b6db2a",1110:"fa57cdcf31006f61",1136:"02b1be4fce59faf6",1178:"0b80ff0680c04a39",1179:"9d42398e5ba7d57d",1200:"af67ba28d70180ff",1235:"77166e10da2380cc",1242:"bc4eca14aa201794",1281:"e04398605bf8569a",1299:"569c391b2a2e60bf",1303:"609b9a74af685044",1337:"171bc5ccc6fe4b44",1466:"4235ee5f615db4b2",1473:"f1d2185c84121efc",1531:"2c145f95ffc9b909",1584:"e4a4ea3282639a88",1714:"0314521638fc12f4",1951:"451c85273b719767",1968:"225167f521b562aa",1981:"3eb45ebe34d9a5b0",2009:"ef7190155be2e592",2063:"63ac471a370733cd",2142:"1c10d84054bc832f",2161:"23577a857aad8491",2412:"e2609a1a4d9bf6a3",2629:"1575787a7e146c1b",2718:"ec43b2a047f249f7",2793:"4c3f3b102a30b4a8",2845:"835de3245fce0b11",2968:"689163b6e8f249a4",3046:"d99374965b0ac2b7",3121:"4097c910bde1ffaf",3149:"4cf54ecbba0d1d31",3187:"af452c57f583a76d",3269:"77a76b03d57c2c16",3283:"fa87c0b012df6807",3285:"9f3959f33f18cf40",3395:"7d131eb24a09c601",3445:"0ea04fe4ff79affa",3467:"f3231737e6cc6c58",3507:"875ea4d4c1683703",3543:"0bfe9083681c086b",3573:"ce9ac84a09ee297d",3621:"89d83148befb444b",3665:"553ab94bcfc03dfa",3707:"009aa7b514c1f5f9",3754:"aaf66b26df52e145",3758:"f68a77e6f25cb4df",3785:"5548925227704304",3976:"d398301d4a362ebd",4006:"cb355ce23a8cd7cd",4075:"55836c0a24d1019d",4106:"934b460e38f73a9f",4147:"46526ba056f4e986",4166:"fd95b0875d02f759",4200:"6154eff5f94c187f",4255:"352497777fb09cc7",4325:"c06a49bea73a3d10",4343:"44713f67c86e9681",4344:"a9a417f5d8e59a40",4376:"a3266e3a6eaa81f0",4438:"17555e945c4be837",4518:"71543414b7078a28",4557:"f665d4f30270db78",4571:"dc19565399486cba",4615:"0194aea8f54b9a3e",4643:"253712de23fe5868",4721:"3869b30f9813b163",4794:"df6c1296f7efba7a",4864:"1a8fa00bd03b7fbb",5174:"b6294ed0e941a6f5",5189:"465514465e13180c",5322:"94e3f455a6f62a31",5345:"8981965dce26bccf",5375:"1986f955ce9bb45f",5461:"c8cd7c37cad8b458",5479:"de5ba94e3c2d13e9",5483:"5e399fefb9b2987b",5500:"ce9c2d3452d6ff8f",5823:"ca789bc033979440",5833:"13e0fd810d826909",5959:"c62633cf97b012b3",6061:"fa91410fa3f1bf01",6081:"67c3b499eee1eb60",6109:"299eda29f616d734",6184:"9a28f6265d99df37",6201:"432558ed232f57ef",6207:"3f2f7bb0dc03220b",6326:"e29459a51aa3438a",6368:"260733751f1395ba",6485:"e596919a62c07604",6539:"a817a243c0119c4b",6547:"bd0f75a98b968b1e",6743:"e7efbd1df6ca83db",6776:"d2aaf86cbcb1eec5",6791:"08050185f17845da",6862:"e9e5350b17d5d32f",6922:"28affb4ad620471f",6929:"1dd4fe6080d06a6e",6931:"bc2b035ad5ce43e6",6980:"3c267b8fe128762f",6983:"d73806a740b7b259",7026:"6905c226dbe75f10",7116:"7b2691bb8874e00d",7171:"15d4f0e1a190cc30",7412:"eddbc2b0c4a48fee",7464:"e675fd506042c5a4",7537:"ce6d8b7a692d4d7d",7598:"9925ca5d819ffb30",7766:"70f645093f7403b5",7776:"66302ab93b08f2d5",7793:"8282c6baf00b9023",7839:"bcc1c90a698225cc",7905:"098aa36ba1229705",7917:"c05cdaf1d78d7862",7978:"38d3fd94d2ffbe8c",8009:"55caa5b7a04d4dc8",8026:"fc962bdb7013b6e1",8035:"5248d3a9566eea46",8204:"ec259e10940f0da1",8257:"f2ba731cbb5b636c",8293:"1e57844228074fe5",8341:"87a70d7ccb2b4739",8501:"f419c3e6b5a08fbc",8534:"261eeee698807175",8616:"8386d929d5e4fcb8",8623:"2a18bc0f0c37c695",8637:"a25127c1b9913048",8681:"730027d235a71db7",8696:"9d9a20bbd899645e",8713:"7c1e82434739189b",8729:"6c1de6805b768bfd",8731:"16ee4eea259b0843",8850:"3cc12452ae53427d",8912:"54ed2c4d4513b0b3",8958:"4006ed53252ccb37",8970:"c19abb080a33b262",9020:"d1e81e2f5b1ba7a7",9090:"1c7fe58362c97188",9211:"80042b0c494e6580",9276:"1a4ae3fb5a2e41be",9358:"e09798aa8a5e64c1",9607:"a0163b5be0e96d6a",9611:"17265259f0da7217",9685:"e28567a320934b21",9754:"2c871443d1a09666",9905:"07885acffd538a86",9924:"f33cc8b599403baf",9936:"6888250ec9d977a5",9948:"2f2f9f11fa4365ab"}[e]+".legacy.css"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c={},f="shopee-pc:",r.l=function(e,a,d,b){if(c[e])c[e].push(a);else{var o,t;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==f+d){o=s;break}}o||(t=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",f+d),o.src=e),c[e]=[a];var l=function(a,f){o.onerror=o.onload=null,clearTimeout(u);var d=c[e];if(delete c[e],o.parentNode&&o.parentNode.removeChild(o),d&&d.forEach((function(e){return e(f)})),a)return a(f)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),t&&document.head.appendChild(o)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.p="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/",r.f.microfeF=function(e,a){var c={1209:[0]}[e];c&&c.forEach((function(e){a.push(r.microfeM(e))}))},d=function(e){return new Promise((function(a,c){var f=r.miniCssF(e),d=r.p+f;if(function(e,a){for(var c=document.getElementsByTagName("link"),f=0;f<c.length;f++){var d=(o=c[f]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(d===e||d===a))return o}var b=document.getElementsByTagName("style");for(f=0;f<b.length;f++){var o;if((d=(o=b[f]).getAttribute("data-href"))===e||d===a)return o}}(f,d))return a();!function(e,a,c,f){var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onerror=d.onload=function(b){if(d.onerror=d.onload=null,"load"===b.type)c();else{var o=b&&("load"===b.type?"missing":b.type),t=b&&b.target&&b.target.href||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=o,r.request=t,d.parentNode.removeChild(d),f(r)}},d.href=a,document.head.appendChild(d)}(e,d,a,c)}))},b={6658:0},r.f.miniCss=function(e,a){b[e]?a.push(b[e]):0!==b[e]&&{215:1,293:1,369:1,561:1,566:1,569:1,601:1,642:1,684:1,773:1,809:1,919:1,952:1,975:1,986:1,1028:1,1036:1,1086:1,1110:1,1136:1,1178:1,1179:1,1200:1,1235:1,1242:1,1281:1,1299:1,1303:1,1337:1,1466:1,1473:1,1531:1,1584:1,1714:1,1951:1,1968:1,1981:1,2009:1,2063:1,2142:1,2161:1,2412:1,2629:1,2718:1,2793:1,2845:1,2968:1,3046:1,3121:1,3149:1,3187:1,3269:1,3283:1,3285:1,3395:1,3445:1,3467:1,3507:1,3543:1,3573:1,3621:1,3665:1,3707:1,3754:1,3758:1,3785:1,3976:1,4006:1,4075:1,4106:1,4147:1,4166:1,4200:1,4255:1,4325:1,4343:1,4344:1,4376:1,4438:1,4518:1,4557:1,4571:1,4615:1,4643:1,4721:1,4794:1,4864:1,5174:1,5189:1,5322:1,5345:1,5375:1,5461:1,5479:1,5483:1,5500:1,5823:1,5833:1,5959:1,6061:1,6081:1,6109:1,6184:1,6201:1,6207:1,6326:1,6368:1,6485:1,6539:1,6547:1,6743:1,6776:1,6791:1,6862:1,6922:1,6929:1,6931:1,6980:1,6983:1,7026:1,7116:1,7171:1,7412:1,7464:1,7537:1,7598:1,7766:1,7776:1,7793:1,7839:1,7905:1,7917:1,7978:1,8009:1,8026:1,8035:1,8204:1,8257:1,8293:1,8341:1,8501:1,8534:1,8616:1,8623:1,8637:1,8681:1,8696:1,8713:1,8729:1,8731:1,8850:1,8912:1,8958:1,8970:1,9020:1,9090:1,9211:1,9276:1,9358:1,9607:1,9611:1,9685:1,9754:1,9905:1,9924:1,9936:1,9948:1}[e]&&a.push(b[e]=d(e).then((function(){b[e]=0}),(function(a){throw delete b[e],a})))},function(){var e={6658:0},a=[];r.f.j=function(a,c){var f=r.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1281|1584|2845|6326|6983|7917|8035|8731)$/.test(a))e[a]=0;else{var d=new Promise((function(c,d){f=e[a]=[c,d]}));c.push(f[2]=d);var b=r.p+r.u(a),o=new Error;r.l(b,(function(c){if(r.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var d=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;o.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",o.name="ChunkLoadError",o.type=d,o.request=b,f[1](o)}}),"chunk-"+a,a)}};var c=function(){},f=function(f,d){for(var b,o,t=d[0],n=d[1],i=d[2],s=d[3],l=0,u=[];l<t.length;l++)o=t[l],r.o(e,o)&&e[o]&&u.push(e[o][0]),e[o]=0;for(b in n)r.o(n,b)&&(r.m[b]=n[b]);for(i&&i(r),f&&f(d);u.length;)u.shift()();return s&&a.push.apply(a,s),c()},d=("undefined"!=typeof self?self:this).webpackChunkshopee_pc=("undefined"!=typeof self?self:this).webpackChunkshopee_pc||[];function b(){for(var c,f=0;f<a.length;f++){for(var d=a[f],b=!0,o=1;o<d.length;o++){var t=d[o];0!==e[t]&&(b=!1)}b&&(a.splice(f--,1),c=r(r.s=d[0]))}return 0===a.length&&(r.x(),r.x=function(){}),c}d.forEach(f.bind(null,0)),d.push=f.bind(null,d.push.bind(d));var o=r.x;r.x=function(){return r.x=o||function(){},(c=b)()}}(),r.x()}();
//# sourceMappingURL=https://sourcemap.webfe.shopeemobile.com/pcmall-static/_/webpack-runtime.90aee7aaab88df8e.legacy.js.map