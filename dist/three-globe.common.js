'use strict';

var three = require('three');
var Kapsule = require('kapsule');
var TWEEN = require('@tweenjs/tween.js');
var threeGeojsonGeometry = require('three-geojson-geometry');
var d3Geo = require('d3-geo');
var BufferGeometryUtils_js = require('three/examples/jsm/utils/BufferGeometryUtils.js');
var accessorFn = require('accessor-fn');
var tinyColor = require('tinycolor2');
var dataJoint = require('data-joint');
var FrameTicker = require('frame-ticker');
var d3Scale = require('d3-scale');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Kapsule__default = /*#__PURE__*/_interopDefaultLegacy(Kapsule);
var TWEEN__default = /*#__PURE__*/_interopDefaultLegacy(TWEEN);
var accessorFn__default = /*#__PURE__*/_interopDefaultLegacy(accessorFn);
var tinyColor__default = /*#__PURE__*/_interopDefaultLegacy(tinyColor);
var dataJoint__default = /*#__PURE__*/_interopDefaultLegacy(dataJoint);
var FrameTicker__default = /*#__PURE__*/_interopDefaultLegacy(FrameTicker);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var materialDispose = function materialDispose(material) {
  if (material instanceof Array) {
    material.forEach(materialDispose);
  } else {
    if (material.map) {
      material.map.dispose();
    }

    material.dispose();
  }
};

var deallocate = function deallocate(obj) {
  if (obj.geometry) {
    obj.geometry.dispose();
  }

  if (obj.material) {
    materialDispose(obj.material);
  }

  if (obj.texture) {
    obj.texture.dispose();
  }

  if (obj.children) {
    obj.children.forEach(deallocate);
  }
};

var emptyObject = function emptyObject(obj) {
  while (obj.children.length) {
    var childObj = obj.children[0];
    obj.remove(childObj);
    deallocate(childObj);
  }
};

function linkKapsule (kapsulePropName, kapsuleType) {
  var dummyK = new kapsuleType(); // To extract defaults

  return {
    linkProp: function linkProp(prop) {
      // link property config
      return {
        "default": dummyK[prop](),
        onChange: function onChange(v, state) {
          state[kapsulePropName][prop](v);
        },
        triggerUpdate: false
      };
    },
    linkMethod: function linkMethod(method) {
      // link method pass-through
      return function (state) {
        var kapsuleInstance = state[kapsulePropName];

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var returnVal = kapsuleInstance[method].apply(kapsuleInstance, args);
        return returnVal === kapsuleInstance ? this // chain based on the parent object, not the inner kapsule
        : returnVal;
      };
    }
  };
}

var GLOBE_RADIUS = 100;
var GLOBE_RESOLUTION = 32;

function polar2Cartesian(lat, lng) {
  var relAltitude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var phi = (90 - lat) * Math.PI / 180;
  var theta = (90 - lng) * Math.PI / 180;
  var r = GLOBE_RADIUS * (1 + relAltitude);
  return {
    x: r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.cos(phi),
    z: r * Math.sin(phi) * Math.sin(theta)
  };
}

function cartesian2Polar(_ref) {
  var x = _ref.x,
      y = _ref.y,
      z = _ref.z;
  var r = Math.sqrt(x * x + y * y + z * z);
  var phi = Math.acos(y / r);
  var theta = Math.atan2(z, x);
  return {
    lat: 90 - phi * 180 / Math.PI,
    lng: 90 - theta * 180 / Math.PI - (theta < -Math.PI / 2 ? 360 : 0),
    // keep within [-180, 180] boundaries
    altitude: r / GLOBE_RADIUS - 1
  };
}

var THREE = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BackSide: three.BackSide,
  BufferAttribute: three.BufferAttribute,
  Color: three.Color,
  Mesh: three.Mesh,
  ShaderMaterial: three.ShaderMaterial
};
var fragmentShader = "\nuniform vec3 color;\nuniform float coefficient;\nuniform float power;\nvarying vec3 vVertexNormal;\nvarying vec3 vVertexWorldPosition;\nvoid main() {\n  vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;\n  vec3 viewCameraToVertex\t= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;\n  viewCameraToVertex = normalize(viewCameraToVertex);\n  float intensity\t= pow(\n    coefficient + dot(vVertexNormal, viewCameraToVertex),\n    power\n  );\n  gl_FragColor = vec4(color, intensity);\n}";
var vertexShader = "\nvarying vec3 vVertexWorldPosition;\nvarying vec3 vVertexNormal;\nvoid main() {\n  vVertexNormal\t= normalize(normalMatrix * normal);\n  vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  gl_Position\t= projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n";
var defaultOptions = {
  backside: true,
  coefficient: 0.5,
  color: 'gold',
  size: 2,
  power: 1
}; // Based off: http://stemkoski.blogspot.fr/2013/07/shaders-in-threejs-glow-and-halo.html

function createGlowMaterial(coefficient, color, power) {
  return new THREE.ShaderMaterial({
    depthWrite: false,
    fragmentShader: fragmentShader,
    transparent: true,
    uniforms: {
      coefficient: {
        value: coefficient
      },
      color: {
        value: new THREE.Color(color)
      },
      power: {
        value: power
      }
    },
    vertexShader: vertexShader
  });
}
function createGlowGeometry(geometry, size) {
  // expect BufferGeometry
  var glowGeometry = geometry.clone(); // Resize vertex positions according to normals

  var position = new Float32Array(geometry.attributes.position.count * 3);

  for (var idx = 0, len = position.length; idx < len; idx++) {
    var normal = geometry.attributes.normal.array[idx];
    var curPos = geometry.attributes.position.array[idx];
    position[idx] = curPos + normal * size;
  }

  glowGeometry.setAttribute('position', new THREE.BufferAttribute(position, 3));
  return glowGeometry;
}
function createGlowMesh(geometry) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
  var backside = options.backside,
      coefficient = options.coefficient,
      color = options.color,
      size = options.size,
      power = options.power;
  var glowGeometry = createGlowGeometry(geometry, size);
  var glowMaterial = createGlowMaterial(coefficient, color, power);

  if (backside) {
    glowMaterial.side = THREE.BackSide;
  }

  return new THREE.Mesh(glowGeometry, glowMaterial);
}

var THREE$1 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  Color: three.Color,
  LineBasicMaterial: three.LineBasicMaterial,
  LineSegments: three.LineSegments,
  Mesh: three.Mesh,
  MeshPhongMaterial: three.MeshPhongMaterial,
  SphereBufferGeometry: three.SphereBufferGeometry,
  TextureLoader: three.TextureLoader
};

var GlobeLayerKapsule = Kapsule__default['default']({
  props: {
    globeImageUrl: {},
    showGlobe: {
      "default": true,
      onChange: function onChange(showGlobe, state) {
        state.globeObj.visible = !!showGlobe;
      },
      triggerUpdate: false
    },
    showAtmosphere: {
      "default": true,
      onChange: function onChange(showAtmosphere, state) {
        state.atmosphereObj.visible = !!showAtmosphere;
      },
      triggerUpdate: false
    },
    showGraticules: {
      "default": false,
      onChange: function onChange(showGraticules, state) {
        state.graticulesObj.visible = !!showGraticules;
      },
      triggerUpdate: false
    },
    onReady: {
      "default": function _default() {},
      triggerUpdate: false
    }
  },
  stateInit: function stateInit() {
    // create globe
    var globeGeometry = new THREE$1.SphereBufferGeometry(GLOBE_RADIUS, GLOBE_RESOLUTION, GLOBE_RESOLUTION);
    var globeObj = new THREE$1.Mesh(globeGeometry, new THREE$1.MeshPhongMaterial({
      color: 0x000000,
      transparent: true
    }));
    globeObj.rotation.y = -Math.PI / 2; // face prime meridian along Z axis

    globeObj.__globeObjType = 'globe'; // Add object type
    // create atmosphere

    var atmosphereObj = createGlowMesh(globeObj.geometry, {
      backside: true,
      color: 'lightskyblue',
      size: GLOBE_RADIUS * 0.15,
      power: 3.5,
      // dispersion
      coefficient: 0.1
    });
    atmosphereObj.__globeObjType = 'atmosphere'; // Add object type
    // create graticules

    var graticulesObj = new THREE$1.LineSegments(new threeGeojsonGeometry.GeoJsonGeometry(d3Geo.geoGraticule10(), GLOBE_RADIUS, 2), new THREE$1.LineBasicMaterial({
      color: 'lightgrey',
      transparent: true,
      opacity: 0.1
    }));
    return {
      globeObj: globeObj,
      atmosphereObj: atmosphereObj,
      graticulesObj: graticulesObj
    };
  },
  init: function init(threeObj, state) {
    // Clear the scene
    emptyObject(threeObj); // Main three object to manipulate

    state.scene = threeObj;
    state.scene.add(state.globeObj); // add globe

    state.scene.add(state.atmosphereObj); // add atmosphere

    state.scene.add(state.graticulesObj); // add graticules

    state.ready = false;
  },
  update: function update(state, changedProps) {
    var globeMaterial = state.globeObj.material;

    if (changedProps.hasOwnProperty('globeImageUrl')) {
      if (!state.globeImageUrl) {
        // Black globe if no image
        !globeMaterial.color && (globeMaterial.color = new THREE$1.Color(0x000000));
      } else {
        new THREE$1.TextureLoader().load(state.globeImageUrl, function (texture) {
          globeMaterial.map = texture;
          globeMaterial.color = null;
          globeMaterial.needsUpdate = true; // ready when first globe image finishes loading (asynchronously to allow 1 frame to load texture)

          !state.ready && (state.ready = true) && setTimeout(state.onReady);
        });
      }
    }

    if (!state.ready && !state.globeImageUrl) {
      // ready immediately if there's no globe image
      state.ready = true;
      state.onReady();
    }
  }
});

var colorStr2Hex = function colorStr2Hex(str) {
  return isNaN(str) ? parseInt(tinyColor__default['default'](str).toHex(), 16) : str;
};

var colorAlpha = function colorAlpha(str) {
  return isNaN(str) ? tinyColor__default['default'](str).getAlpha() : 1;
};

var color2ShaderArr = function color2ShaderArr(str) {
  var includeAlpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var rgba = tinyColor__default['default'](str).toRgb();
  var rgbArr = ['r', 'g', 'b'].map(function (d) {
    return rgba[d] / 255;
  });
  return includeAlpha ? [].concat(_toConsumableArray(rgbArr), [rgba.a]) : rgbArr;
};

function threeDigest(data, scene) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return dataJoint__default['default'](data, scene.children, function (obj) {
    return scene.add(obj);
  }, function (obj) {
    scene.remove(obj);
    emptyObject(obj);
    obj.hasOwnProperty('__data') && delete obj.__data.__currentTargetD;
  }, _objectSpread2({
    objBindAttr: '__threeObj'
  }, options));
}

var THREE$2 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BufferAttribute: three.BufferAttribute,
  BufferGeometry: three.BufferGeometry,
  Color: three.Color,
  CylinderBufferGeometry: three.CylinderBufferGeometry,
  Matrix4: three.Matrix4,
  Mesh: three.Mesh,
  MeshBasicMaterial: three.MeshBasicMaterial,
  MeshLambertMaterial: three.MeshLambertMaterial,
  Object3D: three.Object3D,
  Vector3: three.Vector3
};
// support multiple method names for backwards threejs compatibility

var applyMatrix4Fn = new THREE$2.BufferGeometry().applyMatrix4 ? 'applyMatrix4' : 'applyMatrix';
var PointsLayerKapsule = Kapsule__default['default']({
  props: {
    pointsData: {
      "default": []
    },
    pointLat: {
      "default": 'lat'
    },
    pointLng: {
      "default": 'lng'
    },
    pointColor: {
      "default": function _default() {
        return '#ffffaa';
      }
    },
    pointAltitude: {
      "default": 0.1
    },
    // in units of globe radius
    pointRadius: {
      "default": 0.25
    },
    // in deg
    pointResolution: {
      "default": 12,
      triggerUpdate: false
    },
    // how many slice segments in the cylinder's circumference
    pointsMerge: {
      "default": false
    },
    // boolean. Whether to merge all points into a single mesh for rendering performance
    pointsTransitionDuration: {
      "default": 1000,
      triggerUpdate: false
    } // ms

  },
  init: function init(threeObj, state) {
    // Clear the scene
    emptyObject(threeObj); // Main three object to manipulate

    state.scene = threeObj;
  },
  update: function update(state) {
    // Data accessors
    var latAccessor = accessorFn__default['default'](state.pointLat);
    var lngAccessor = accessorFn__default['default'](state.pointLng);
    var altitudeAccessor = accessorFn__default['default'](state.pointAltitude);
    var radiusAccessor = accessorFn__default['default'](state.pointRadius);
    var colorAccessor = accessorFn__default['default'](state.pointColor); // shared geometry

    var pointGeometry = new THREE$2.CylinderBufferGeometry(1, 1, 1, state.pointResolution);
    pointGeometry[applyMatrix4Fn](new THREE$2.Matrix4().makeRotationX(Math.PI / 2));
    pointGeometry[applyMatrix4Fn](new THREE$2.Matrix4().makeTranslation(0, 0, -0.5));
    var pxPerDeg = 2 * Math.PI * GLOBE_RADIUS / 360;
    var pointMaterials = {}; // indexed by color

    var scene = state.pointsMerge ? new THREE$2.Object3D() : state.scene; // use fake scene if merging points

    threeDigest(state.pointsData, scene, {
      createObj: createObj,
      updateObj: updateObj
    });

    if (state.pointsMerge) {
      // merge points into a single mesh
      var pointsGeometry = !state.pointsData.length ? new THREE$2.BufferGeometry() : BufferGeometryUtils_js.BufferGeometryUtils.mergeBufferGeometries(state.pointsData.map(function (d) {
        var obj = d.__threeObj;
        d.__threeObj = undefined; // unbind merged points

        var geom = obj.geometry.clone(); // apply mesh world transform to vertices

        obj.updateMatrix();
        geom[applyMatrix4Fn](obj.matrix); // color vertices

        var color = new THREE$2.Color(colorAccessor(d));
        var nVertices = geom.attributes.position.count;
        var colors = new Float32Array(nVertices * 3);

        for (var i = 0, len = nVertices; i < len; i++) {
          var idx = i * 3;
          colors[idx] = color.r;
          colors[idx + 1] = color.g;
          colors[idx + 2] = color.b;
        }

        geom.setAttribute('color', new THREE$2.BufferAttribute(colors, 3));
        return geom;
      }));
      var points = new THREE$2.Mesh(pointsGeometry, new THREE$2.MeshBasicMaterial({
        color: 0xffffff,
        vertexColors: true,
        morphTargets: false
      }));
      points.__globeObjType = 'points'; // Add object type

      points.__data = state.pointsData; // Attach obj data

      emptyObject(state.scene);
      state.scene.add(points);
    } //


    function createObj() {
      var obj = new THREE$2.Mesh(pointGeometry);
      obj.__globeObjType = 'point'; // Add object type

      return obj;
    }

    function updateObj(obj, d) {
      var applyUpdate = function applyUpdate(td) {
        var _obj$__currentTargetD = obj.__currentTargetD = td,
            r = _obj$__currentTargetD.r,
            alt = _obj$__currentTargetD.alt,
            lat = _obj$__currentTargetD.lat,
            lng = _obj$__currentTargetD.lng; // position cylinder ground


        Object.assign(obj.position, polar2Cartesian(lat, lng)); // orientate outwards

        var globeCenter = state.pointsMerge ? new THREE$2.Vector3(0, 0, 0) : state.scene.localToWorld(new THREE$2.Vector3(0, 0, 0)); // translate from local to world coords

        obj.lookAt(globeCenter); // scale radius and altitude

        obj.scale.x = obj.scale.y = Math.min(30, r) * pxPerDeg;
        obj.scale.z = Math.max(alt * GLOBE_RADIUS, 0.1); // avoid non-invertible matrix
      };

      var targetD = {
        alt: +altitudeAccessor(d),
        r: +radiusAccessor(d),
        lat: +latAccessor(d),
        lng: +lngAccessor(d)
      };
      var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
        alt: -1e-3
      });

      if (Object.keys(targetD).some(function (k) {
        return currentTargetD[k] !== targetD[k];
      })) {
        if (state.pointsMerge || !state.pointsTransitionDuration || state.pointsTransitionDuration < 0) {
          // set final position
          applyUpdate(targetD);
        } else {
          // animate
          new TWEEN__default['default'].Tween(currentTargetD).to(targetD, state.pointsTransitionDuration).easing(TWEEN__default['default'].Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
        }
      }

      if (!state.pointsMerge) {
        // Update materials on individual points
        var color = colorAccessor(d);
        var opacity = colorAlpha(color);

        if (!pointMaterials.hasOwnProperty(color)) {
          pointMaterials[color] = new THREE$2.MeshLambertMaterial({
            color: colorStr2Hex(color),
            transparent: opacity < 1,
            opacity: opacity
          });
        }

        obj.material = pointMaterials[color];
      }
    }
  }
});

var THREE$3 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  AdditiveBlending: three.AdditiveBlending,
  BufferGeometry: three.BufferGeometry,
  CubicBezierCurve3: three.CubicBezierCurve3,
  Curve: three.Curve,
  Float32BufferAttribute: three.Float32BufferAttribute,
  Group: three.Group,
  Line: three.Line,
  Mesh: three.Mesh,
  QuadraticBezierCurve3: three.QuadraticBezierCurve3,
  ShaderMaterial: three.ShaderMaterial,
  TubeBufferGeometry: three.TubeBufferGeometry,
  Vector3: three.Vector3
};
// support both modes for backwards threejs compatibility

var setAttributeFn = new THREE$3.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';
var gradientShaders = {
  uniforms: {
    // dash param defaults, all relative to full length
    dashOffset: {
      value: 0
    },
    dashSize: {
      value: 1
    },
    gapSize: {
      value: 0
    },
    dashTranslate: {
      value: 0
    } // used for animating the dash

  },
  vertexShader: "\n    uniform float dashTranslate; \n\n    attribute vec4 vertexColor;\n    varying vec4 vColor;\n    \n    attribute float vertexRelDistance;\n    varying float vRelDistance;\n\n    void main() {\n      // pass through colors and distances\n      vColor = vertexColor;\n      vRelDistance = vertexRelDistance + dashTranslate;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ",
  fragmentShader: "\n    uniform float dashOffset; \n    uniform float dashSize;\n    uniform float gapSize; \n    \n    varying vec4 vColor;\n    varying float vRelDistance;\n    \n    void main() {\n      // ignore pixels in the gap\n      if (vRelDistance < dashOffset) discard;\n      if (mod(vRelDistance - dashOffset, dashSize + gapSize) > dashSize) discard;\n    \n      // set px color: [r, g, b, a], interpolated between vertices \n      gl_FragColor = vColor; \n    }\n  "
};
var ArcsLayerKapsule = Kapsule__default['default']({
  props: {
    arcsData: {
      "default": []
    },
    arcStartLat: {
      "default": 'startLat'
    },
    arcStartLng: {
      "default": 'startLng'
    },
    arcEndLat: {
      "default": 'endLat'
    },
    arcEndLng: {
      "default": 'endLng'
    },
    arcColor: {
      "default": function _default() {
        return '#ffffaa';
      }
    },
    arcAltitude: {},
    // in units of globe radius
    arcAltitudeAutoScale: {
      "default": 0.5
    },
    // scale altitude proportional to great-arc distance between the two points
    arcStroke: {},
    // in deg
    arcCurveResolution: {
      "default": 64,
      triggerUpdate: false
    },
    // how many straight segments in the curve
    arcCircularResolution: {
      "default": 6,
      triggerUpdate: false
    },
    // how many slice segments in the tube's circumference
    arcDashLength: {
      "default": 1
    },
    // in units of line length
    arcDashGap: {
      "default": 0
    },
    arcDashInitialGap: {
      "default": 0
    },
    arcDashAnimateTime: {
      "default": 0
    },
    // ms
    arcsTransitionDuration: {
      "default": 1000,
      triggerUpdate: false
    } // ms

  },
  init: function init(threeObj, state) {
    // Clear the scene
    emptyObject(threeObj); // Main three object to manipulate

    state.scene = threeObj; // Kick-off dash animations

    new FrameTicker__default['default']().onTick.add(function (_, timeDelta) {
      state.arcsData.filter(function (d) {
        return d.__threeObj && d.__threeObj.children.length && d.__threeObj.children[0].material && d.__threeObj.children[0].__dashAnimateStep;
      }).forEach(function (d) {
        var obj = d.__threeObj.children[0];
        var step = obj.__dashAnimateStep * timeDelta;
        var curTranslate = obj.material.uniforms.dashTranslate.value % 1e9; // reset after 1B loops

        obj.material.uniforms.dashTranslate.value = curTranslate + step;
      });
    });
  },
  update: function update(state) {
    // Data accessors
    var startLatAccessor = accessorFn__default['default'](state.arcStartLat);
    var startLngAccessor = accessorFn__default['default'](state.arcStartLng);
    var endLatAccessor = accessorFn__default['default'](state.arcEndLat);
    var endLngAccessor = accessorFn__default['default'](state.arcEndLng);
    var altitudeAccessor = accessorFn__default['default'](state.arcAltitude);
    var altitudeAutoScaleAccessor = accessorFn__default['default'](state.arcAltitudeAutoScale);
    var strokeAccessor = accessorFn__default['default'](state.arcStroke);
    var colorAccessor = accessorFn__default['default'](state.arcColor);
    var dashLengthAccessor = accessorFn__default['default'](state.arcDashLength);
    var dashGapAccessor = accessorFn__default['default'](state.arcDashGap);
    var dashInitialGapAccessor = accessorFn__default['default'](state.arcDashInitialGap);
    var dashAnimateTimeAccessor = accessorFn__default['default'](state.arcDashAnimateTime);
    var sharedMaterial = new THREE$3.ShaderMaterial(_objectSpread2(_objectSpread2({}, gradientShaders), {}, {
      transparent: true,
      blending: THREE$3.AdditiveBlending
    }));
    threeDigest(state.arcsData, state.scene, {
      createObj: function createObj() {
        var obj = new THREE$3.Group(); // populated in updateObj

        obj.__globeObjType = 'arc'; // Add object type

        return obj;
      },
      updateObj: function updateObj(group, arc) {
        var stroke = strokeAccessor(arc);
        var useTube = stroke !== null && stroke !== undefined;

        if (!group.children.length || useTube !== (group.children[0].type === 'Mesh')) {
          // create or swap object types
          emptyObject(group);

          var _obj = useTube ? new THREE$3.Mesh() : new THREE$3.Line(new THREE$3.BufferGeometry());

          _obj.material = sharedMaterial.clone(); // Separate material instance per object to have dedicated uniforms (but shared shaders)

          group.add(_obj);
        }

        var obj = group.children[0]; // set dash uniforms

        Object.assign(obj.material.uniforms, {
          dashSize: {
            value: dashLengthAccessor(arc)
          },
          gapSize: {
            value: dashGapAccessor(arc)
          },
          dashOffset: {
            value: dashInitialGapAccessor(arc)
          }
        }); // set dash animation step

        var dashAnimateTime = dashAnimateTimeAccessor(arc);
        obj.__dashAnimateStep = dashAnimateTime > 0 ? 1000 / dashAnimateTime : 0; // per second
        // calculate vertex colors (to create gradient)

        var vertexColorArray = calcColorVertexArray(colorAccessor(arc), // single or array of colors
        state.arcCurveResolution, // numSegments
        useTube ? state.arcCircularResolution + 1 : 1 // num vertices per segment
        ); // calculate vertex relative distances (for dashed lines)

        var vertexRelDistanceArray = calcVertexRelDistances(state.arcCurveResolution, // numSegments
        useTube ? state.arcCircularResolution + 1 : 1, // num vertices per segment
        true // run from end to start, to animate in the correct direction
        );
        obj.geometry[setAttributeFn]('vertexColor', vertexColorArray);
        obj.geometry[setAttributeFn]('vertexRelDistance', vertexRelDistanceArray);

        var applyUpdate = function applyUpdate(td) {
          var _arc$__currentTargetD = arc.__currentTargetD = td,
              stroke = _arc$__currentTargetD.stroke,
              curveD = _objectWithoutProperties(_arc$__currentTargetD, ["stroke"]);

          var curve = calcCurve(curveD);

          if (useTube) {
            obj.geometry && obj.geometry.dispose();
            obj.geometry = new THREE$3.TubeBufferGeometry(curve, state.arcCurveResolution, stroke / 2, state.arcCircularResolution);
            obj.geometry[setAttributeFn]('vertexColor', vertexColorArray);
            obj.geometry[setAttributeFn]('vertexRelDistance', vertexRelDistanceArray);
          } else {
            obj.geometry.setFromPoints(curve.getPoints(state.arcCurveResolution));
          }
        };

        var targetD = {
          stroke: stroke,
          alt: altitudeAccessor(arc),
          altAutoScale: +altitudeAutoScaleAccessor(arc),
          startLat: +startLatAccessor(arc),
          startLng: +startLngAccessor(arc),
          endLat: +endLatAccessor(arc),
          endLng: +endLngAccessor(arc)
        };
        var currentTargetD = arc.__currentTargetD || Object.assign({}, targetD, {
          altAutoScale: -1e-3
        });

        if (Object.keys(targetD).some(function (k) {
          return currentTargetD[k] !== targetD[k];
        })) {
          if (!state.arcsTransitionDuration || state.arcsTransitionDuration < 0) {
            // set final position
            applyUpdate(targetD);
          } else {
            // animate
            new TWEEN__default['default'].Tween(currentTargetD).to(targetD, state.arcsTransitionDuration).easing(TWEEN__default['default'].Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
          }
        }
      }
    }); //

    function calcCurve(_ref) {
      var alt = _ref.alt,
          altAutoScale = _ref.altAutoScale,
          startLat = _ref.startLat,
          startLng = _ref.startLng,
          endLat = _ref.endLat,
          endLng = _ref.endLng;

      var getVec = function getVec(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 3),
            lng = _ref3[0],
            lat = _ref3[1],
            alt = _ref3[2];

        var _polar2Cartesian = polar2Cartesian(lat, lng, alt),
            x = _polar2Cartesian.x,
            y = _polar2Cartesian.y,
            z = _polar2Cartesian.z;

        return new THREE$3.Vector3(x, y, z);
      }; //calculate curve


      var startPnt = [startLng, startLat];
      var endPnt = [endLng, endLat];
      var altitude = alt;
      (altitude === null || altitude === undefined) && ( // by default set altitude proportional to the great-arc distance
      altitude = d3Geo.geoDistance(startPnt, endPnt) / 2 * altAutoScale);

      if (altitude) {
        var interpolate = d3Geo.geoInterpolate(startPnt, endPnt);

        var _map = [0.25, 0.75].map(function (t) {
          return [].concat(_toConsumableArray(interpolate(t)), [altitude * 1.5]);
        }),
            _map2 = _slicedToArray(_map, 2),
            m1Pnt = _map2[0],
            m2Pnt = _map2[1];

        var curve = _construct(THREE$3.CubicBezierCurve3, _toConsumableArray([startPnt, m1Pnt, m2Pnt, endPnt].map(getVec))); //const mPnt = [...interpolate(0.5), altitude * 2];
        //curve = new THREE.QuadraticBezierCurve3(...[startPnt, mPnt, endPnt].map(getVec));


        return curve;
      } else {
        // ground line
        var _alt = 0.001; // slightly above the ground to prevent occlusion

        return calcSphereArc.apply(void 0, _toConsumableArray([[].concat(startPnt, [_alt]), [].concat(endPnt, [_alt])].map(getVec)));
      } //


      function calcSphereArc(startVec, endVec) {
        var angle = startVec.angleTo(endVec);

        var getGreatCirclePoint = function getGreatCirclePoint(t) {
          return new THREE$3.Vector3().addVectors(startVec.clone().multiplyScalar(Math.sin((1 - t) * angle)), endVec.clone().multiplyScalar(Math.sin(t * angle))).divideScalar(Math.sin(angle));
        };

        var sphereArc = new THREE$3.Curve();
        sphereArc.getPoint = getGreatCirclePoint;
        return sphereArc;
      }
    }

    function calcColorVertexArray(colors, numSegments) {
      var numVerticesPerSegment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

      var getVertexColor;

      if (colors instanceof Array) {
        // array of colors, interpolate at each step
        var colorScale = d3Scale.scaleLinear().domain(colors.map(function (_, idx) {
          return idx / (colors.length - 1);
        })) // same number of stops as colors
        .range(colors);

        getVertexColor = function getVertexColor(t) {
          return color2ShaderArr(colorScale(t));
        };
      } else {
        // single color, use constant
        var vertexColor = color2ShaderArr(colors);

        getVertexColor = function getVertexColor() {
          return vertexColor;
        };
      }

      var vertexColorArray = new THREE$3.Float32BufferAttribute(numVerticesGroup * 4 * numVerticesPerSegment, 4);

      for (var v = 0, l = numVerticesGroup; v < l; v++) {
        var _vertexColor = getVertexColor(v / (l - 1));

        for (var s = 0; s < numVerticesPerSegment; s++) {
          vertexColorArray.set(_vertexColor, (v * numVerticesPerSegment + s) * 4);
        }
      }

      return vertexColorArray;
    }

    function calcVertexRelDistances(numSegments) {
      var numVerticesPerSegment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var invert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

      var arrLen = numVerticesGroup * numVerticesPerSegment;
      var vertexDistanceArray = new THREE$3.Float32BufferAttribute(arrLen, 1);

      for (var v = 0, l = numVerticesGroup; v < l; v++) {
        var relDistance = v / (l - 1);

        for (var s = 0; s < numVerticesPerSegment; s++) {
          var idx = v * numVerticesPerSegment + s;
          var pos = invert ? arrLen - 1 - idx : idx;
          vertexDistanceArray.setX(pos, relDistance);
        }
      }

      return vertexDistanceArray;
    }
  }
});

var THREE$4 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  Group: three.Group,
  Vector2: three.Vector2,
  Vector3: three.Vector3
};

var layers = ['globeLayer', 'pointsLayer', 'arcsLayer']; // Expose config from layers

var bindGlobeLayer = linkKapsule('globeLayer', GlobeLayerKapsule);
var linkedGlobeLayerProps = Object.assign.apply(Object, _toConsumableArray(['globeImageUrl', 'showGlobe', 'showAtmosphere', 'showGraticules'].map(function (p) {
  return _defineProperty({}, p, bindGlobeLayer.linkProp(p));
})));
var bindPointsLayer = linkKapsule('pointsLayer', PointsLayerKapsule);
var linkedPointsLayerProps = Object.assign.apply(Object, _toConsumableArray(['pointsData', 'pointLat', 'pointLng', 'pointColor', 'pointAltitude', 'pointRadius', 'pointResolution', 'pointsMerge', 'pointsTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindPointsLayer.linkProp(p));
})));
var bindArcsLayer = linkKapsule('arcsLayer', ArcsLayerKapsule);
var linkedArcsLayerProps = Object.assign.apply(Object, _toConsumableArray(['arcsData', 'arcStartLat', 'arcStartLng', 'arcEndLat', 'arcEndLng', 'arcColor', 'arcAltitude', 'arcAltitudeAutoScale', 'arcStroke', 'arcCurveResolution', 'arcCircularResolution', 'arcDashLength', 'arcDashGap', 'arcDashInitialGap', 'arcDashAnimateTime', 'arcsTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindArcsLayer.linkProp(p));
}))); //

var Globe = Kapsule__default['default']({
  props: _objectSpread2(_objectSpread2(_objectSpread2({
    rendererSize: {
      "default": new THREE$4.Vector2(window.innerWidth, window.innerHeight),
      onChange: function onChange(rendererSize, state) {},
      triggerUpdate: false
    }
  }, linkedGlobeLayerProps), linkedPointsLayerProps), linkedArcsLayerProps),
  methods: {
    getCoords: function getCoords(state) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return polar2Cartesian.apply(void 0, args);
    },
    toGeoCoords: function toGeoCoords(state) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return cartesian2Polar.apply(void 0, args);
    }
  },
  stateInit: function stateInit() {
    return {
      globeLayer: GlobeLayerKapsule(),
      pointsLayer: PointsLayerKapsule(),
      arcsLayer: ArcsLayerKapsule()
    };
  },
  init: function init(threeObj, state, _ref4) {
    var _ref4$animateIn = _ref4.animateIn,
        animateIn = _ref4$animateIn === void 0 ? true : _ref4$animateIn,
        _ref4$waitForGlobeRea = _ref4.waitForGlobeReady,
        waitForGlobeReady = _ref4$waitForGlobeRea === void 0 ? true : _ref4$waitForGlobeRea;
    // Clear the scene
    emptyObject(threeObj); // Main three object to manipulate

    threeObj.add(state.scene = new THREE$4.Group());
    state.scene.visible = false; // hide scene before globe initialization
    // Add all layers groups

    layers.forEach(function (layer) {
      var g = new THREE$4.Group();
      state.scene.add(g);
      state[layer](g);
    });

    var initGlobe = function initGlobe() {
      if (animateIn) {
        // Animate build-in just once
        state.scene.scale.set(1e-6, 1e-6, 1e-6);
        new TWEEN__default['default'].Tween({
          k: 1e-6
        }).to({
          k: 1
        }, 600).easing(TWEEN__default['default'].Easing.Quadratic.Out).onUpdate(function (_ref5) {
          var k = _ref5.k;
          return state.scene.scale.set(k, k, k);
        }).start();
        var rotAxis = new THREE$4.Vector3(0, 1, 0);
        new TWEEN__default['default'].Tween({
          rot: Math.PI * 2
        }).to({
          rot: 0
        }, 1200).easing(TWEEN__default['default'].Easing.Quintic.Out).onUpdate(function (_ref6) {
          var rot = _ref6.rot;
          return state.scene.setRotationFromAxisAngle(rotAxis, rot);
        }).start();
      }

      state.scene.visible = true;
    };

    waitForGlobeReady ? state.globeLayer.onReady(initGlobe) : initGlobe(); // run tween updates

    (function onFrame() {
      requestAnimationFrame(onFrame);
      TWEEN__default['default'].update();
    })(); // IIFE

  },
  update: function update(state) {}
});

function fromKapsule (kapsule) {
  var baseClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;
  var initKapsuleWithSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var FromKapsule = /*#__PURE__*/function (_baseClass) {
    _inherits(FromKapsule, _baseClass);

    var _super = _createSuper(FromKapsule);

    function FromKapsule() {
      var _this;

      _classCallCheck(this, FromKapsule);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.__kapsuleInstance = kapsule.apply(void 0, args).apply(void 0, [].concat(_toConsumableArray(initKapsuleWithSelf ? [_assertThisInitialized(_this)] : []), args));
      return _this;
    }

    return FromKapsule;
  }(baseClass); // attach kapsule props/methods to class prototype


  Object.keys(kapsule()).forEach(function (m) {
    return FromKapsule.prototype[m] = function () {
      var _this$__kapsuleInstan;

      var returnVal = (_this$__kapsuleInstan = this.__kapsuleInstance)[m].apply(_this$__kapsuleInstan, arguments);

      return returnVal === this.__kapsuleInstance ? this // chain based on this class, not the kapsule obj
      : returnVal;
    };
  });
  return FromKapsule;
}

var threeGlobe = fromKapsule(Globe, three.Group, true);

module.exports = threeGlobe;
