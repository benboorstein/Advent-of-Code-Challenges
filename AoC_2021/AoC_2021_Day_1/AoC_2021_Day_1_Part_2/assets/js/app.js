const depthMeasurements = [
    119,
    121,
    129,
    128,
    130,
    134,
    138,
    143,
    113,
    114,
    129,
    103,
    90,
    98,
    91,
    96,
    101,
    90,
    73,
    66,
    74,
    82,
    80,
    91,
    92,
    93,
    96,
    101,
    102,
    115,
    122,
    114,
    119,
    120,
    108,
    104,
    109,
    135,
    123,
    133,
    134,
    133,
    138,
    144,
    151,
    158,
    159,
    162,
    166,
    146,
    137,
    124,
    153,
    150,
    153,
    162,
    169,
    167,
    169,
    168,
    162,
    165,
    138,
    112,
    111,
    121,
    122,
    123,
    130,
    127,
    135,
    138,
    136,
    138,
    141,
    139,
    144,
    169,
    174,
    180,
    183,
    207,
    210,
    227,
    224,
    235,
    239,
    228,
    232,
    231,
    238,
    250,
    260,
    262,
    264,
    267,
    276,
    277,
    283,
    284,
    285,
    283,
    280,
    260,
    259,
    261,
    260,
    263,
    270,
    275,
    278,
    281,
    282,
    287,
    286,
    285,
    286,
    290,
    298,
    299,
    291,
    294,
    295,
    305,
    310,
    313,
    287,
    271,
    272,
    274,
    276,
    275,
    290,
    307,
    305,
    307,
    312,
    314,
    313,
    315,
    323,
    319,
    332,
    333,
    334,
    335,
    352,
    353,
    358,
    359,
    362,
    352,
    377,
    374,
    383,
    391,
    395,
    397,
    391,
    399,
    400,
    402,
    406,
    413,
    414,
    417,
    412,
    421,
    422,
    420,
    421,
    418,
    383,
    387,
    388,
    395,
    397,
    398,
    401,
    403,
    415,
    416,
    419,
    447,
    449,
    451,
    467,
    468,
    479,
    484,
    487,
    494,
    519,
    546,
    566,
    570,
    582,
    586,
    587,
    611,
    613,
    647,
    641,
    640,
    663,
    670,
    671,
    681,
    682,
    683,
    685,
    688,
    664,
    676,
    677,
    678,
    702,
    703,
    724,
    734,
    739,
    742,
    768,
    771,
    774,
    784,
    792,
    787,
    764,
    773,
    783,
    790,
    787,
    788,
    798,
    797,
    796,
    802,
    810,
    837,
    839,
    840,
    841,
    842,
    845,
    852,
    853,
    856,
    855,
    858,
    862,
    868,
    869,
    868,
    852,
    851,
    852,
    856,
    857,
    869,
    883,
    884,
    886,
    893,
    896,
    904,
    905,
    939,
    938,
    945,
    953,
    962,
    957,
    956,
    959,
    961,
    962,
    963,
    954,
    960,
    961,
    965,
    966,
    967,
    958,
    959,
    957,
    960,
    967,
    968,
    971,
    972,
    983,
    994,
    991,
    1007,
    1022,
    1034,
    1043,
    1038,
    1039,
    1028,
    1034,
    1036,
    1037,
    1039,
    1049,
    1028,
    1049,
    1050,
    1052,
    1053,
    1054,
    1059,
    1060,
    1066,
    1078,
    1075,
    1083,
    1084,
    1077,
    1075,
    1105,
    1108,
    1111,
    1113,
    1114,
    1127,
    1124,
    1127,
    1131,
    1138,
    1128,
    1123,
    1109,
    1108,
    1112,
    1116,
    1117,
    1139,
    1145,
    1152,
    1133,
    1134,
    1133,
    1147,
    1148,
    1143,
    1142,
    1157,
    1163,
    1164,
    1160,
    1162,
    1167,
    1152,
    1157,
    1180,
    1182,
    1187,
    1188,
    1190,
    1201,
    1196,
    1199,
    1192,
    1203,
    1207,
    1212,
    1213,
    1230,
    1231,
    1233,
    1237,
    1239,
    1245,
    1241,
    1239,
    1246,
    1249,
    1247,
    1251,
    1271,
    1269,
    1273,
    1281,
    1282,
    1286,
    1287,
    1288,
    1290,
    1292,
    1294,
    1291,
    1289,
    1298,
    1300,
    1301,
    1289,
    1286,
    1284,
    1288,
    1290,
    1293,
    1297,
    1299,
    1294,
    1298,
    1301,
    1288,
    1294,
    1305,
    1291,
    1312,
    1310,
    1309,
    1310,
    1307,
    1309,
    1310,
    1312,
    1313,
    1317,
    1316,
    1301,
    1304,
    1337,
    1342,
    1341,
    1346,
    1347,
    1352,
    1353,
    1340,
    1345,
    1362,
    1354,
    1364,
    1367,
    1370,
    1366,
    1368,
    1369,
    1370,
    1371,
    1372,
    1368,
    1380,
    1384,
    1386,
    1406,
    1407,
    1413,
    1414,
    1417,
    1418,
    1396,
    1395,
    1401,
    1398,
    1408,
    1415,
    1403,
    1402,
    1394,
    1380,
    1388,
    1391,
    1398,
    1396,
    1399,
    1397,
    1402,
    1410,
    1436,
    1438,
    1443,
    1449,
    1450,
    1470,
    1451,
    1448,
    1439,
    1440,
    1437,
    1439,
    1445,
    1447,
    1448,
    1449,
    1456,
    1460,
    1466,
    1495,
    1497,
    1506,
    1530,
    1519,
    1521,
    1523,
    1522,
    1509,
    1526,
    1537,
    1539,
    1540,
    1542,
    1540,
    1538,
    1543,
    1546,
    1522,
    1523,
    1540,
    1536,
    1548,
    1550,
    1554,
    1559,
    1575,
    1576,
    1556,
    1567,
    1566,
    1583,
    1575,
    1579,
    1578,
    1561,
    1564,
    1562,
    1560,
    1577,
    1591,
    1592,
    1612,
    1603,
    1607,
    1600,
    1613,
    1620,
    1621,
    1620,
    1625,
    1624,
    1623,
    1642,
    1647,
    1651,
    1655,
    1657,
    1662,
    1669,
    1692,
    1683,
    1690,
    1684,
    1686,
    1689,
    1683,
    1711,
    1709,
    1712,
    1714,
    1715,
    1710,
    1711,
    1702,
    1703,
    1719,
    1720,
    1722,
    1734,
    1748,
    1749,
    1752,
    1754,
    1760,
    1758,
    1760,
    1763,
    1780,
    1788,
    1791,
    1802,
    1795,
    1793,
    1795,
    1798,
    1801,
    1788,
    1815,
    1816,
    1825,
    1850,
    1858,
    1859,
    1858,
    1859,
    1860,
    1862,
    1864,
    1868,
    1865,
    1866,
    1867,
    1869,
    1876,
    1875,
    1872,
    1877,
    1897,
    1911,
    1909,
    1912,
    1911,
    1913,
    1914,
    1915,
    1913,
    1910,
    1912,
    1903,
    1906,
    1909,
    1912,
    1915,
    1914,
    1921,
    1940,
    1938,
    1940,
    1941,
    1954,
    1955,
    1959,
    1980,
    1999,
    2000,
    2007,
    2014,
    2038,
    2036,
    2042,
    2045,
    2053,
    2065,
    2066,
    2087,
    2079,
    2099,
    2091,
    2092,
    2095,
    2094,
    2096,
    2108,
    2113,
    2126,
    2148,
    2164,
    2168,
    2173,
    2177,
    2185,
    2189,
    2181,
    2182,
    2172,
    2171,
    2170,
    2177,
    2178,
    2180,
    2193,
    2194,
    2200,
    2181,
    2169,
    2178,
    2179,
    2193,
    2195,
    2198,
    2222,
    2225,
    2214,
    2213,
    2214,
    2196,
    2224,
    2240,
    2245,
    2244,
    2273,
    2274,
    2276,
    2277,
    2266,
    2261,
    2262,
    2259,
    2262,
    2263,
    2271,
    2272,
    2273,
    2277,
    2276,
    2256,
    2255,
    2251,
    2253,
    2240,
    2246,
    2256,
    2257,
    2298,
    2299,
    2294,
    2295,
    2300,
    2299,
    2312,
    2308,
    2318,
    2320,
    2324,
    2321,
    2336,
    2352,
    2351,
    2358,
    2360,
    2337,
    2343,
    2356,
    2354,
    2344,
    2340,
    2348,
    2343,
    2349,
    2350,
    2362,
    2363,
    2381,
    2380,
    2382,
    2383,
    2385,
    2395,
    2372,
    2368,
    2363,
    2362,
    2363,
    2364,
    2372,
    2391,
    2382,
    2360,
    2362,
    2363,
    2389,
    2393,
    2401,
    2400,
    2410,
    2404,
    2403,
    2402,
    2416,
    2424,
    2420,
    2415,
    2440,
    2454,
    2457,
    2456,
    2446,
    2448,
    2453,
    2460,
    2463,
    2472,
    2473,
    2474,
    2475,
    2474,
    2471,
    2472,
    2481,
    2503,
    2475,
    2477,
    2485,
    2491,
    2506,
    2507,
    2504,
    2506,
    2518,
    2508,
    2507,
    2521,
    2524,
    2511,
    2533,
    2545,
    2555,
    2563,
    2564,
    2567,
    2558,
    2561,
    2588,
    2568,
    2566,
    2575,
    2590,
    2588,
    2589,
    2598,
    2590,
    2601,
    2607,
    2606,
    2616,
    2624,
    2615,
    2621,
    2628,
    2627,
    2634,
    2650,
    2667,
    2671,
    2686,
    2687,
    2692,
    2712,
    2716,
    2717,
    2715,
    2717,
    2718,
    2720,
    2721,
    2738,
    2733,
    2730,
    2734,
    2742,
    2747,
    2748,
    2755,
    2767,
    2761,
    2778,
    2772,
    2773,
    2780,
    2783,
    2784,
    2779,
    2790,
    2782,
    2787,
    2786,
    2793,
    2797,
    2806,
    2807,
    2809,
    2808,
    2809,
    2810,
    2811,
    2807,
    2808,
    2804,
    2815,
    2848,
    2850,
    2867,
    2849,
    2872,
    2873,
    2874,
    2883,
    2885,
    2894,
    2895,
    2914,
    2917,
    2910,
    2895,
    2896,
    2899,
    2877,
    2883,
    2880,
    2890,
    2918,
    2921,
    2923,
    2928,
    2926,
    2925,
    2932,
    2919,
    2921,
    2928,
    2929,
    2935,
    2936,
    2918,
    2921,
    2935,
    2937,
    2946,
    2948,
    2936,
    2934,
    2949,
    2944,
    2940,
    2941,
    2945,
    2985,
    2986,
    2987,
    2990,
    3001,
    3008,
    3010,
    3021,
    3023,
    3022,
    3025,
    3029,
    3030,
    3033,
    3012,
    3020,
    3008,
    3011,
    3006,
    2999,
    2998,
    3007,
    3008,
    3009,
    3010,
    3012,
    3018,
    3025,
    3050,
    3049,
    3063,
    3068,
    3064,
    3070,
    3071,
    3069,
    3076,
    3082,
    3095,
    3103,
    3105,
    3107,
    3108,
    3113,
    3110,
    3111,
    3102,
    3103,
    3107,
    3140,
    3164,
    3162,
    3163,
    3166,
    3168,
    3164,
    3163,
    3173,
    3190,
    3195,
    3196,
    3202,
    3204,
    3218,
    3228,
    3227,
    3247,
    3249,
    3251,
    3260,
    3247,
    3258,
    3265,
    3266,
    3290,
    3306,
    3298,
    3301,
    3302,
    3303,
    3289,
    3302,
    3298,
    3299,
    3302,
    3300,
    3289,
    3288,
    3285,
    3286,
    3320,
    3329,
    3338,
    3328,
    3324,
    3334,
    3329,
    3333,
    3334,
    3336,
    3338,
    3341,
    3324,
    3331,
    3329,
    3330,
    3347,
    3373,
    3380,
    3383,
    3382,
    3385,
    3372,
    3379,
    3369,
    3370,
    3381,
    3390,
    3391,
    3392,
    3393,
    3402,
    3414,
    3435,
    3459,
    3454,
    3456,
    3453,
    3460,
    3472,
    3473,
    3472,
    3473,
    3482,
    3483,
    3486,
    3495,
    3521,
    3534,
    3535,
    3536,
    3539,
    3573,
    3568,
    3575,
    3571,
    3573,
    3588,
    3575,
    3576,
    3578,
    3579,
    3577,
    3582,
    3603,
    3606,
    3607,
    3609,
    3622,
    3629,
    3648,
    3656,
    3655,
    3658,
    3657,
    3644,
    3643,
    3610,
    3605,
    3606,
    3607,
    3609,
    3607,
    3580,
    3571,
    3570,
    3573,
    3580,
    3581,
    3563,
    3566,
    3575,
    3567,
    3566,
    3568,
    3570,
    3572,
    3590,
    3584,
    3578,
    3572,
    3571,
    3576,
    3571,
    3578,
    3545,
    3534,
    3543,
    3549,
    3551,
    3556,
    3557,
    3571,
    3576,
    3565,
    3563,
    3562,
    3568,
    3569,
    3571,
    3572,
    3573,
    3574,
    3576,
    3577,
    3584,
    3564,
    3577,
    3583,
    3584,
    3593,
    3599,
    3610,
    3613,
    3622,
    3635,
    3639,
    3646,
    3643,
    3606,
    3599,
    3602,
    3604,
    3617,
    3618,
    3626,
    3647,
    3635,
    3655,
    3657,
    3658,
    3657,
    3656,
    3655,
    3648,
    3650,
    3651,
    3655,
    3659,
    3661,
    3671,
    3665,
    3668,
    3674,
    3671,
    3667,
    3668,
    3665,
    3667,
    3665,
    3667,
    3669,
    3668,
    3677,
    3683,
    3684,
    3689,
    3709,
    3717,
    3711,
    3710,
    3713,
    3721,
    3736,
    3734,
    3736,
    3740,
    3746,
    3754,
    3753,
    3754,
    3768,
    3796,
    3780,
    3762,
    3765,
    3767,
    3773,
    3800,
    3806,
    3823,
    3827,
    3828,
    3841,
    3848,
    3850,
    3853,
    3855,
    3845,
    3847,
    3854,
    3864,
    3849,
    3857,
    3841,
    3850,
    3851,
    3856,
    3854,
    3861,
    3858,
    3861,
    3871,
    3878,
    3887,
    3881,
    3882,
    3883,
    3885,
    3882,
    3885,
    3900,
    3905,
    3903,
    3906,
    3910,
    3940,
    3925,
    3926,
    3950,
    3951,
    3952,
    3954,
    3965,
    3962,
    3963,
    3957,
    3944,
    3953,
    3957,
    3964,
    3965,
    3973,
    3983,
    3989,
    3991,
    4010,
    4009,
    3997,
    3999,
    4006,
    4008,
    4009,
    4010,
    4006,
    4018,
    4020,
    4028,
    4003,
    4004,
    4013,
    4018,
    4024,
    4037,
    4039,
    4036,
    4041,
    4040,
    4036,
    4038,
    4039,
    4040,
    4044,
    4045,
    4075,
    4092,
    4088,
    4086,
    4083,
    4086,
    4087,
    4096,
    4088,
    4089,
    4080,
    4085,
    4088,
    4087,
    4090,
    4088,
    4094,
    4107,
    4106,
    4107,
    4115,
    4121,
    4136,
    4153,
    4161,
    4163,
    4170,
    4173,
    4169,
    4172,
    4174,
    4180,
    4166,
    4183,
    4188,
    4198,
    4207,
    4220,
    4221,
    4225,
    4242,
    4224,
    4228,
    4226,
    4227,
    4225,
    4233,
    4242,
    4252,
    4249,
    4250,
    4215,
    4216,
    4217,
    4236,
    4245,
    4246,
    4248,
    4249,
    4250,
    4251,
    4254,
    4252,
    4254,
    4257,
    4268,
    4272,
    4273,
    4278,
    4282,
    4290,
    4298,
    4303,
    4307,
    4285,
    4286,
    4290,
    4289,
    4283,
    4285,
    4286,
    4313,
    4322,
    4327,
    4329,
    4330,
    4333,
    4335,
    4334,
    4309,
    4314,
    4316,
    4320,
    4335,
    4339,
    4348,
    4347,
    4362,
    4358,
    4361,
    4350,
    4349,
    4356,
    4358,
    4359,
    4370,
    4383,
    4387,
    4378,
    4383,
    4380,
    4379,
    4395,
    4387,
    4394,
    4381,
    4385,
    4386,
    4390,
    4389,
    4394,
    4396,
    4410,
    4412,
    4407,
    4408,
    4416,
    4417,
    4421,
    4428,
    4423,
    4420,
    4422,
    4421,
    4425,
    4426,
    4423,
    4437,
    4438,
    4440,
    4441,
    4446,
    4451,
    4456,
    4451,
    4455,
    4470,
    4493,
    4494,
    4486,
    4489,
    4500,
    4501,
    4485,
    4496,
    4499,
    4505,
    4507,
    4500,
    4516,
    4518,
    4535,
    4532,
    4544,
    4541,
    4562,
    4564,
    4550,
    4551,
    4553,
    4584,
    4588,
    4598,
    4599,
    4608,
    4623,
    4621,
    4628,
    4650,
    4655,
    4657,
    4658,
    4653,
    4658,
    4670,
    4685,
    4686,
    4714,
    4708,
    4709,
    4710,
    4718,
    4720,
    4719,
    4738,
    4730,
    4719,
    4722,
    4736,
    4737,
    4739,
    4750,
    4751,
    4754,
    4755,
    4758,
    4759,
    4764,
    4767,
    4774,
    4770,
    4768,
    4773,
    4760,
    4763,
    4762,
    4764,
    4765,
    4767,
    4778,
    4777,
    4795,
    4792,
    4793,
    4796,
    4797,
    4800,
    4779,
    4782,
    4794,
    4795,
    4785,
    4786,
    4788,
    4789,
    4798,
    4800,
    4802,
    4803,
    4814,
    4831,
    4830,
    4849,
    4852,
    4854,
    4860,
    4861,
    4860,
    4862,
    4860,
    4834,
    4835,
    4858,
    4859,
    4863,
    4864,
    4873,
    4874,
    4875,
    4880,
    4881,
    4882,
    4902,
    4899,
    4900,
    4904,
    4903,
    4900,
    4916,
    4917,
    4921,
    4924,
    4910,
    4917,
    4918,
    4919,
    4920,
    4910,
    4913,
    4932,
    4941,
    4959,
    4976,
    4978,
    5000,
    4999,
    4982,
    4973,
    4977,
    5002,
    5000,
    5001,
    5000,
    5003,
    5004,
    5005,
    5015,
    5004,
    4994,
    4992,
    4982,
    4991,
    4993,
    4996,
    4994,
    5000,
    5004,
    5013,
    5038,
    5054,
    5062,
    5051,
    5054,
    5044,
    5020,
    5008,
    5030,
    5033,
    5007,
    5004,
    5005,
    5012,
    5022,
    5032,
    5035,
    5040,
    5042,
    5059,
    5058,
    5088,
    5096,
    5099,
    5107,
    5126,
    5137,
    5134,
    5148,
    5151,
    5150,
    5152,
    5158,
    5163,
    5167,
    5166,
    5150,
    5149,
    5132,
    5136,
    5149,
    5150,
    5157,
    5145,
    5165,
    5163,
    5171,
    5168,
    5177,
    5174,
    5142,
    5145,
    5160,
    5180,
    5202,
    5222,
    5226,
    5239,
    5240,
    5261,
    5262,
    5263,
    5274,
    5276,
    5277,
    5285,
    5286,
    5284,
    5296,
    5324,
    5303,
    5313,
    5314,
    5324,
    5339,
    5340,
    5343,
    5344,
    5343,
    5344,
    5356,
    5345,
    5344,
    5345,
    5343,
    5350,
    5353,
    5355,
    5358,
    5359,
    5363,
    5364,
    5368,
    5370,
    5397,
    5398,
    5393,
    5394,
    5395,
    5401,
    5408,
    5417,
    5418,
    5419,
    5422,
    5424,
    5430,
    5433,
    5435,
    5439,
    5447,
    5449,
    5448,
    5466,
    5457,
    5461,
    5473,
    5477,
    5478,
    5480,
    5481,
    5480,
    5498,
    5511,
    5536,
    5543,
    5544,
    5556,
    5557,
    5594,
    5601,
    5582,
    5583,
    5584,
    5593,
    5611,
    5614,
    5613,
    5626,
    5624,
    5614,
    5610,
    5611,
    5605,
    5608,
    5609,
    5611,
    5632,
    5637,
    5639,
    5667,
    5682,
    5685,
    5686,
    5687,
    5688,
    5690,
    5670,
    5673,
    5674,
    5680,
    5673,
    5674,
    5694,
    5704,
    5698,
    5702,
    5703,
    5696,
    5697,
    5695,
    5728,
    5733,
    5735,
    5739,
    5727,
    5728,
    5732,
    5733,
    5732,
    5741,
    5754,
    5755,
    5757,
    5733,
    5734,
    5735,
    5737,
    5738,
    5750,
    5773,
    5775,
    5787,
    5800,
    5818,
    5819,
    5820,
    5826,
    5830,
    5831,
    5833,
    5841,
    5832,
    5835,
    5839,
    5840,
    5835,
    5836,
    5841,
    5838,
    5841,
    5837,
    5843,
    5842,
    5837,
    5843,
    5845,
    5846,
    5884,
    5888,
    5891,
    5893,
    5924,
    5934,
    5939,
    5940,
    5907,
    5888,
    5889,
    5892,
    5893,
    5884,
    5898,
    5900,
    5901,
    5884,
    5893,
    5894,
    5895,
    5909,
    5911,
    5915,
    5918,
    5922,
    5931,
    5935,
    5939,
    5934,
    5944,
    5943,
    5965,
    5967,
    5970,
    5971,
    5941,
    5942,
    5943,
    5942,
    5943,
    5946,
    5945,
    5923,
    5918,
    5921,
    5931,
    5940,
    5915,
    5931,
    5930,
    5937,
    5909,
    5908,
    5911,
    5909,
    5912,
    5911,
    5912,
    5910,
    5921,
    5929,
    5931,
    5929,
    5925,
    5907,
    5909,
    5910,
    5913,
    5910,
    5908,
    5921,
    5927,
    5943,
    5941,
    5971,
    5972,
    5977,
    5979,
    5984,
    6002,
    6007,
    6009,
    6010,
    6011,
    6026,
    6034,
    6027,
    6026,
    6035,
    6033,
    6032,
    6033,
    6034,
    6040,
    6042,
    6045,
    6044,
    6052,
    6053,
    6043,
    6036,
    6024,
    6026,
    6033,
    6034,
    6037,
    6040,
    6048,
    6069,
    6072,
    6076,
    6074,
    6081,
    6080,
    6078,
    6089,
    6092,
    6090,
    6091,
    6096,
    6107,
    6109,
    6108,
    6113,
    6138,
    6120,
    6122,
    6112,
    6122,
    6119,
    6129,
    6123,
    6124,
    6135,
    6136,
    6157,
    6159,
    6161,
    6162,
    6161,
    6179,
    6180,
    6187,
    6188,
    6189,
    6193,
    6196,
    6195,
    6192,
    6195,
    6197,
    6196,
    6197,
    6199,
    6200,
    6198,
    6214,
    6216,
    6217,
    6218,
    6217,
    6236,
    6239,
    6209,
    6214,
    6208,
    6210,
    6212,
    6217
]

// with 'reduce'
const findNum = function(arr) {
    return arr.reduce((acc, num, i) => {
        return arr[i + 1] + arr[i + 2] + arr[i + 3] > num + arr[i + 1] + arr[i + 2] ? acc += 1 : acc
    }, 0)
}

console.log(findNum(depthMeasurements)) // 1516 // correct


// // with 'for'
// const findNum = function(arr) {
//     counter = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] + arr[i + 2] + arr[i + 3] > arr[i] + arr[i + 1] + arr[i + 2]) {
//             counter++
//         }
//     }
    
//     return counter
// }

// console.log(findNum(depthMeasurements)) // 1516 // correct


// // with 'forEach'
// const findNum = function(arr) {
//     counter = 0

//     arr.forEach((num, i) => {
//         if (arr[i + 1] + arr[i + 2] + arr[i + 3] > num + arr[i + 1] + arr[i + 2]) {
//             counter++
//         }
//     })
    
//     return counter
// }

// console.log(findNum(depthMeasurements)) // 1516 // correct