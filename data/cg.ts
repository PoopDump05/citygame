/// <reference path="js/cellmodifiers.d.ts" />

var cg: any =
{
  "terrain":
  {
    "grass":
    {
      "type": "grass",
      "anchor": [0.5, 1],
      "frame": "grass.png",
      "interactive": true,
      "hitArea": [[0, -32], [32, -16], [0, 0], [-32, -16]],
      "flags": ["ground", "grass"]
    },
    "water":
    {
      "type": "water",
      "anchor": [0.5, 1],
      "frame": "water.png",
      "interactive": true,
      "hitArea": [[0, -32], [32, -16], [0, 0], [-32, -16]],
      "flags": ["water"],
      "effects":
      [
        {
          "type": "niceEnviroment",
          "range": 2,
          "strength": 1
        }
      ]
    },
    "sand":
    {
      "type": "sand",
      "anchor": [0.5, 1],
      "frame": "sand.png",
      "interactive": true,
      "hitArea": [[0, -32], [32, -16], [0, 0], [-32, -16]],
      "flags": ["ground", "sand"]
    },
    "snow":
    {
      "type": "snow",
      "anchor": [0.5, 1],
      "frame": "snow.png",
      "interactive": true,
      "hitArea": [[0, -32], [32, -16], [0, 0], [-32, -16]],
      "flags": ["ground", "snow"]
    }
  },
  "content":
  {

    "underConstruction":
    {
      "type": "underConstruction",
      "baseType": "underConstruction",
      "anchor": [0.5, 1],
      "frame": ["underconstruction.png"]
    },
    "plants":
    {
      "grass":
      {
        "tree1":
        {
          "type": "tree1",
          "baseType": "plant",
          "anchor": [0.5, 1],
          "frame": ["tree1.png"],
          "canBuildOn": ["grass"],
          "effects":
          [
            {
              "type": "niceEnviroment",
              "range": 2,
              "strength": 1
            }
          ]
        },
        "tree2":
        {
          "type": "tree2",
          "baseType": "plant",
          "anchor": [0.5, 1],
          "frame": ["tree2.png"],
          "canBuildOn": ["grass"],
          "effects":
          [
            {
              "type": "niceEnviroment",
              "range": 2,
              "strength": 1
            }
          ]
        },
        "tree3":
        {
          "type": "tree3",
          "baseType": "plant",
          "anchor": [0.5, 1],
          "frame": ["tree3.png"],
          "canBuildOn": ["grass"],
          "effects":
          [
            {
              "type": "niceEnviroment",
              "range": 2,
              "strength": 1
            }
          ]
        },
        "tree4":
        {
          "type": "tree4",
          "baseType": "plant",
          "anchor": [0.5, 1],
          "frame": ["tree4.png"],
          "canBuildOn": ["grass"],
          "effects":
          [
            {
              "type": "niceEnviroment",
              "range": 2,
              "strength": 1
            }
          ]
        },
        "tree5":
        {
          "type": "tree5",
          "baseType": "plant",
          "anchor": [0.5, 1],
          "frame": ["tree5.png"],
          "canBuildOn": ["grass"],
          "effects":
          [
            {
              "type": "niceEnviroment",
              "range": 2,
              "strength": 1
            }
          ]
        },
      },
      "sand":
      {
        "cactus":
        {
          "type": "cactus",
          "baseType": "plant",
          "anchor": [0.5, 1.5],
          "frame": ["cactus.png"],
          "canBuildOn": ["sand"]
        }
      },
      "water":
      {
        "tentacle":
        {
          "type": "tentacle",
          "baseType": "plant",
          "anchor": [0.5, 1.5],
          "frame": ["tentacle.png"],
          "canBuildOn": ["water"]
        }
      },
      "snow":
      {
        "snowman":
        {
          "type": "snowman",
          "baseType": "plant",
          "anchor": [0.5, 1.25],
          "frame": ["snowman.png"],
          "canBuildOn": ["snow"]
        }
      }
    },
    "roads":
    {
      "road_h":
      {
        "type": "road_h",
        "baseType": "road",
        "categoryType": "road",
        "title": "Road",
        "anchor": [0.5, 1.0],
        "frame": ["road_h.png"],
        "effects":
        [
          {
            "type": "nearbyRoad",
            "range": 1,
            "strength": 1
          }
        ]
      },
      "road_v":
      {
        "type": "road_v",
        "baseType": "road",
        "categoryType": "road",
        "title": "Road",
        "anchor": [0.5, 1.0],
        "frame": ["road_v.png"],
        "effects":
        [
          {
            "type": "nearbyRoad",
            "range": 1,
            "strength": 1
          }
        ]
      },
      "road_ne":
      {
        "type": "road_ne",
        "baseType": "road",
        "categoryType": "road",
        "title": "Road",
        "anchor": [0.5, 1.0],
        "frame": ["road_ne.png"],
        "effects":
        [
          {
            "type": "nearbyRoad",
            "range": 1,
            "strength": 1
          }
        ]
      },
      "road_nw":
      {
        "type": "road_nw",
        "baseType": "road",
        "categoryType": "road",
        "title": "Road",
        "anchor": [0.5, 1.0],
        "frame": ["road_nw.png"],
        "effects":
        [
          {
            "type": "nearbyRoad",
            "range": 1,
            "strength": 1
          }
        ]
      },
      "road_sw":
      {
        "type": "road_sw",
        "baseType": "road",
        "categoryType": "road",
        "title": "Road",
        "anchor": [0.5, 1.0],
        "frame": ["road_sw.png"],
        "effects":
        [
          {
            "type": "nearbyRoad",
            "range": 1,
            "strength": 1
          }
        ]
      },
      "road_es":
      {
        "type": "road_es",
        "baseType": "road",
        "categoryType": "road",
        "title": "Road",
        "anchor": [0.5, 1.0],
        "frame": ["road_se.png"],
        "effects":
        [
          {
            "type": "nearbyRoad",
            "range": 1,
            "strength": 1
          }
        ]
      },
      "road_nesw":
      {
        "type": "road_nesw",
        "baseType": "road",
        "categoryType": "road",
        "title": "Road",
        "anchor": [0.5, 1.0],
        "frame": ["road_news.png"],
        "effects":
        [
          {
            "type": "nearbyRoad",
            "range": 1,
            "strength": 1
          }
        ]
      },
      "road_new":
      {
        "type": "road_new",
        "baseType": "road",
        "categoryType": "road",
        "title": "Road",
        "anchor": [0.5, 1.0],
        "frame": ["road_new.png"],
        "effects":
        [
          {
            "type": "nearbyRoad",
            "range": 1,
            "strength": 1
          }
        ]
      },
      "road_nsw":
      {
        "type": "road_nsw",
        "baseType": "road",
        "categoryType": "road",
        "title": "Road",
        "anchor": [0.5, 1.0],
        "frame": ["road_nsw.png"],
        "effects":
        [
          {
            "type": "nearbyRoad",
            "range": 1,
            "strength": 1
          }
        ]
      },
      "road_esw":
      {
        "type": "road_esw",
        "baseType": "road",
        "categoryType": "road",
        "title": "Road",
        "anchor": [0.5, 1.0],
        "frame": ["road_sew.png"],
        "effects":
        [
          {
            "type": "nearbyRoad",
            "range": 1,
            "strength": 1
          }
        ]
      },
      "road_nes":
      {
        "type": "road_nes",
        "baseType": "road",
        "categoryType": "road",
        "title": "Road",
        "anchor": [0.5, 1.0],
        "frame": ["road_nse.png"],
        "effects":
        [
          {
            "type": "nearbyRoad",
            "range": 1,
            "strength": 1
          }
        ]
      }
    },
    "tubes":
    {
      "tube_h":
      {
        "type": "tube_h",
        "baseType": "tube",
        "anchor": [0.5, 1.0],
        "frame": ["tube_h.png"]
      },
      "tube_v":
      {
        "type": "tube_v",
        "baseType": "tube",
        "anchor": [0.5, 1.0],
        "frame": ["tube_v.png"]
      },
      "tube_ne":
      {
        "type": "tube_ne",
        "baseType": "tube",
        "anchor": [0.5, 1.0],
        "frame": ["tube_ne.png"]
      },
      "tube_nw":
      {
        "type": "tube_nw",
        "baseType": "tube",
        "anchor": [0.5, 1.0],
        "frame": ["tube_nw.png"]
      },
      "tube_sw":
      {
        "type": "tube_sw",
        "baseType": "tube",
        "anchor": [0.5, 1.0],
        "frame": ["tube_sw.png"]
      },
      "tube_es":
      {
        "type": "tube_es",
        "baseType": "tube",
        "anchor": [0.5, 1.0],
        "frame": ["tube_se.png"]
      },
      "tube_nesw":
      {
        "type": "tube_nesw",
        "baseType": "tube",
        "anchor": [0.5, 1.0],
        "frame": ["tube_news.png"]
      },
      "tube_new":
      {
        "type": "tube_new",
        "baseType": "tube",
        "anchor": [0.5, 1.0],
        "frame": ["tube_new.png"]
      },
      "tube_nsw":
      {
        "type": "tube_nsw",
        "baseType": "tube",
        "anchor": [0.5, 1.0],
        "frame": ["tube_nsw.png"]
      },
      "tube_esw":
      {
        "type": "tube_esw",
        "baseType": "tube",
        "anchor": [0.5, 1.0],
        "frame": ["tube_sew.png"]
      },
      "tube_nes":
      {
        "type": "tube_nes",
        "baseType": "tube",
        "anchor": [0.5, 1.0],
        "frame": ["tube_nse.png"]
      }
    },
    "buildings":
    {
      "house1":
      {
        "type": "house1",
        "baseType": "building",
        "categoryType": "apartment",
        "title": "Apartment 1",
        "baseProfit": 16,
        "daysForProfitTick": 1,
        "cost": 3000,
        "buildTime": 14,
        "anchor": [0.5, 1],
        "frame": ["house1.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "population": 5,
        "effects":
        [
          {
            "type": "crowded",
            "range": 2,
            "strength": 1
          },
          {
            "type": "population",
            "range": 3,
            "strength": 1
          }
        ]
      },
      "house2":
      {
        "type": "house2",
        "baseType": "building",
        "categoryType": "apartment",
        "title": "Apartment 2",
        "baseProfit": 200,
        "daysForProfitTick": 1,
        "cost": 100000,
        "buildTime": 21,
        "anchor": [0.5, 1],
        "frame": ["house2.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "population": 10,
        "effects":
        [
          {
            "type": "crowded",
            "range": 2,
            "strength": 2
          },
          {
            "type": "population",
            "range": 3,
            "strength": 2
          }
        ]
      },
      "house3":
      {
        "type": "house3",
        "baseType": "building",
        "categoryType": "apartment",
        "title": "Apartment 3",
        "baseProfit": 1.2,
        "daysForProfitTick": 1,
        "cost": 25,
        "buildTime": 14,
        "anchor": [0.5, 1],
        "frame": ["house3.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "population": 5,
        "effects":
        [
          {
            "type": "crowded",
            "range": 2,
            "strength": 1
          },
          {
            "type": "population",
            "range": 3,
            "strength": 1
          }
        ]
      },
      "house4":
      {
        "type": "house4",
        "baseType": "building",
        "categoryType": "apartment",
        "title": "Apartment 4",
        "baseProfit": 2.5,
        "daysForProfitTick": 1,
        "cost": 50,
        "buildTime": 21,
        "anchor": [0.5, 1],
        "frame": ["house4.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "population": 10,
        "effects":
        [
          {
            "type": "crowded",
            "range": 2,
            "strength": 2
          },
          {
            "type": "population",
            "range": 3,
            "strength": 2
          }
        ]
      },
      "house5":
      {
        "type": "house5",
        "baseType": "building",
        "categoryType": "apartment",
        "title": "Apartment 5",
        "baseProfit": 2.5,
        "daysForProfitTick": 1,
        "cost": 50,
        "buildTime": 21,
        "anchor": [0.5, 1],
        "frame": ["house5.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "population": 10,
        "effects":
        [
          {
            "type": "crowded",
            "range": 2,
            "strength": 2
          },
          {
            "type": "population",
            "range": 3,
            "strength": 2
          }
        ]
      },
      "house6":
      {
        "type": "house6",
        "baseType": "building",
        "categoryType": "apartment",
        "title": "Apartment 6",
        "baseProfit": 2.5,
        "daysForProfitTick": 1,
        "cost": 50,
        "buildTime": 21,
        "anchor": [0.5, 1],
        "frame": ["house6.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "population": 10,
        "effects":
        [
          {
            "type": "crowded",
            "range": 2,
            "strength": 2
          },
          {
            "type": "population",
            "range": 3,
            "strength": 2
          }
        ]
      },
      "house7":
      {
        "type": "house7",
        "baseType": "building",
        "categoryType": "apartment",
        "title": "Apartment 7",
        "baseProfit": 1.2,
        "daysForProfitTick": 1,
        "cost": 25,
        "buildTime": 14,
        "anchor": [0.425, 1],
        "frame": ["house7.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "population": 5,
        "effects":
        [
          {
            "type": "crowded",
            "range": 2,
            "strength": 1
          },
          {
            "type": "population",
            "range": 3,
            "strength": 1
          }
        ]
      },
      "fastfood":
      {
        "type": "fastfood",
        "baseType": "building",
        "categoryType": "fastfood",
        "title": "Fast food restaurant",
        "baseProfit": 3,
        "daysForProfitTick": 1,
        "cost": 150,
        "buildTime": 14,
        "anchor": [0.5, 1],
        "frame": ["fastfood.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "effects":
        [
          {
            "type": "fastfoodCompetition",
            "range": 3,
            "strength": 1
          }
        ]
      },
      "conveniencestore":
      {
        "type": "conveniencestore",
        "baseType": "building",
        "categoryType": "shopping",
        "title": "Convenience store",
        "baseProfit": 8,
        "daysForProfitTick": 1,
        "cost": 1000,
        "buildTime": 14,
        "anchor": [0.5, 1],
        "frame": ["conveniencestore.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "effects":
        [
          {
            "type": "shoppingCompetition",
            "range": 2,
            "strength": 1
          },
          {
            "type": "nearbyShopping",
            "range": 2,
            "strength": 1
          }
        ]
      },
      "smalloffice":
      {
        "type": "smalloffice",
        "baseType": "building",
        "categoryType": "office",
        "title": "Small office",
        "baseProfit": 40,
        "daysForProfitTick": 1,
        "cost": 10000,
        "buildTime": 21,
        "anchor": [0.5, 1],
        "frame": ["smalloffice.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "effects":
        [
          {
            "type": "population",
            "range": 3,
            "strength": 1
          }
        ]
      },
      "smallstation":
      {
        "type": "smallstation",
        "baseType": "building",
        "categoryType": "station",
        "title": "Small station",
        "cost": 0,
        "buildTime": 1,
        "anchor": [0.5, 1],
        "frame": ["smallstation.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "underground": "tube_nesw",
        "effects":
        [
          {
            "type": "nearbyStation",
            "range": 3,
            "strength": 1
          }
        ]
      },
      "parkinglot":
      {
        "type": "parkinglot",
        "baseType": "building",
        "categoryType": "parking",
        "title": "Parking lot",
        "baseProfit": 1,
        "daysForProfitTick": 1,
        "cost": 25,
        "buildTime": 14,
        "anchor": [0.5, 1],
        "frame": ["parkinglot.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "effects":
        [
          {
            "type": "nearbyParking",
            "range": 2,
            "strength": 1
          }
        ]
      },
      "stretchystore":
      {
        "type": "stretchystore",
        "baseType": "building",
        "categoryType": "shopping",
        "title": "Convenience store 2",
        "size": [2,1],
        "baseProfit": 60,
        "daysForProfitTick": 1,
        "cost": 25000,
        "buildTime": 14,
        "anchor": [0.5, 1],
        "frame": ["stretchystore_f0.png", "stretchystore_f1.png"],
        "icon": "stretchystore.png",
        "canNotBuildOn": ["water", "building", "road"],
        "effects":
        [
          {
            "type": "shoppingCompetition",
            "range": 3,
            "strength": 1
          },
          {
            "type": "nearbyShopping",
            "range": 3,
            "strength": 1
          }
        ]
      },
      "factory":
      {
        "type": "factory",
        "baseType": "building",
        "categoryType": "factory",
        "title": "Factory",
        "baseProfit": 100,
        "daysForProfitTick": 1,
        "cost": 50000,
        "buildTime": 21,
        "anchor": [0.5, 1],
        "frame": ["factory.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "effects":
        [
          {
            "type": "nearbyFactory",
            "range": 4,
            "strength": 1
          }
        ]
      },
      "hotel":
      {
        "type": "hotel",
        "baseType": "building",
        "categoryType": "hotel",
        "title": "Hotel",
        "baseProfit": 100,
        "daysForProfitTick": 1,
        "cost": 250000,
        "buildTime": 21,
        "anchor": [0.5, 1],
        "frame": ["hotel.png"],
        "canNotBuildOn": ["water", "building", "road"],
        "effects":
        [
          {
            "type": "nearbyHotel",
            "range": 4,
            "strength": 1
          },
          {
            "type": "hotelCompetition",
            "range": 3,
            "strength": 1
          },
        ]
      },
      "departmentStore":
      {
        "type": "departmentStore",
        "baseType": "building",
        "categoryType": "shopping",
        "title": "Department store",
        "size": [1,2],
        "baseProfit": 60,
        "daysForProfitTick": 1,
        "cost": 25000,
        "buildTime": 14,
        "anchor": [0.5, 1],
        "frame": ["departmentstore_f0.png", "departmentstore_f1.png"],
        "icon": "departmentstore.png",
        "canNotBuildOn": ["water", "building", "road"],
        "effects":
        [
          {
            "type": "shoppingCompetition",
            "range": 3,
            "strength": 2
          },
          {
            "type": "nearbyShopping",
            "range": 4,
            "strength": 2
          }
        ]
      },
      "soccerStadium":
      {
        "type": "soccerStadium",
        "baseType": "building",
        "categoryType": "stadium",
        "title": "soccer stadium",
        "size": [2,2],
        "baseProfit": 60,
        "daysForProfitTick": 1,
        "cost": 25000,
        "buildTime": 14,
        "anchor": [0.5, 1],
        "frame": ["soccerstadium_f0.png", "soccerstadium_f2.png",
          "soccerstadium_f1.png", "soccerstadium_f3.png"],
        "icon": "departmentstore.png",
        "canNotBuildOn": ["water", "building", "road"],
        "effects":
        [
          {
            "type": "nearbyShopping",
            "range": 4,
            "strength": 2
          }
        ]
      }
    }
  }
};

var buildingTypeIndexes: any = {};

function findType(typeName: string, target: any = cg)
{
  if (buildingTypeIndexes[typeName])
  {
    return buildingTypeIndexes[typeName];
  }

  for (var prop in target)
  {
    if (target[prop].type === typeName)
    {
      buildingTypeIndexes[typeName] = target[prop];
      return target[prop]
    }
    else if (typeof target[prop] === "object" && !target[prop].type)
    {
      var matchFound = findType(typeName, target[prop])
      if (matchFound) return matchFound;
    }
  }
};

(function translateModifierEffects(target)
{
  for (var prop in target)
  {
    if (prop === "effects")
    {
      var newEffects = [];
      var effectTargets: any =
      {
        negative: {},
        positive: {}
      };

      for (var i = 0; i < target.effects.length; i++)
      {
        var e = target.effects[i];
        if (!cellModifiers[e.type]) console.error("Invalid effect defined on ",
          target)

        var translated = cellModifiers[e.type].call(null,
          e.range, e.strength);

        translated.center = target.size || [1, 1];

        translated.scaling = translated.scaling ||
          function(strength)
          {
            return 1+Math.log(strength);
          };

        newEffects.push(translated);


        for (var effect in translated.effect)
        {
          var typeOfEffect = "positive";
          if (translated.effect[effect] < 0)
          {
            typeOfEffect = "negative";
          }
          for (var j = 0; j < translated.targets.length; j++)
          {
            effectTargets[typeOfEffect][translated.targets[j]] = true;
          }
        }

      }
      target.translatedEffects = newEffects;
      target.effectTargets =
      {
        positive: Object.keys(effectTargets.positive),
        negative: Object.keys(effectTargets.negative)
      }
    }
    else if (typeof target[prop] === "object")
    {
      translateModifierEffects(target[prop])
    }
  }
}(cg));

var effectSourcesIndex: any = {};

(function getEffectSources(target)
{
  for (var prop in target)
  {
    if (prop === "effectTargets")
    {
      for (var polarity in target[prop])
      {
        var flags = target[prop][polarity];

        for (var i = 0; i < flags.length; i++)
        {
          var flag = flags[i];
          if (!effectSourcesIndex[flag]) effectSourcesIndex[flag] =
          {
            positive: [],
            negative: []
          }
          var type = target.categoryType || "enviroment";
          if (effectSourcesIndex[flag][polarity].indexOf(type) < 0)
          {
            effectSourcesIndex[flag][polarity].push(type);
          }
        }
      }
    }
    else if (typeof target[prop] === "object")
    {
      getEffectSources(target[prop])
    }
  }
}(cg));

(function addIcons(target)
{
  for (var prop in target)
  {
    if (prop === "frame")
    {
      if (!target.icon && target.frame.length === 1)
      {
        target.icon = target.frame[0];
      }
    }
    else if (typeof target[prop] === "object")
    {
      addIcons(target[prop])
    }
  }
}(cg));

var playerBuildableBuildings = [];
[
  "parkinglot",
  "conveniencestore",
  "fastfood",
  "house1",
  "smalloffice",
  "stretchystore",
  "house2",
  "factory",
  "hotel",
  "departmentStore",
  "soccerStadium"
].forEach(function(type){playerBuildableBuildings.push(findType(type))});

// easier balancing
// cost, base profit

var basevalues =
[
  [25, 0.3],
  [300, 0.7],
  [700, 1.5],
  [1500, 3],
  [5000, 10],
  [20000, 13],
  [50000, 20],
  [100000, 50],
  [250000, 75],
  [750000, 90],
  [1, 1]
];

for (var i = 0; i < playerBuildableBuildings.length; i++)
{
  var type = playerBuildableBuildings[i];

  type.cost = basevalues[i][0];
  type.baseProfit = basevalues[i][1];
}