"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Exercicio 1
var User = /*#__PURE__*/function () {
  function User() {
    var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var admin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, User);

    this.admin = admin;
    this.email = email;
    this.password = password;
  }

  _createClass(User, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return User;
}();

var Admin = /*#__PURE__*/function (_User) {
  _inherits(Admin, _User);

  var _super = _createSuper(Admin);

  function Admin() {
    var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, Admin);

    return _super.call(this, email, password, true);
  }

  return Admin;
}(User);

var Manager = /*#__PURE__*/function (_User2) {
  _inherits(Manager, _User2);

  var _super2 = _createSuper(Manager);

  function Manager() {
    var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, Manager);

    return _super2.call(this, email, password, false);
  }

  return Manager;
}(User);

var manager = new Manager("Manager email", "Manager password");
var admin = new Admin("admin email", "admin password"); // Exercicio 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var arr = usuarios.map(function (user) {
  return user.idade;
});
var arr2 = usuarios.filter(function (user) {
  return user.empresa == 'Rocketseat';
});
var arr3 = usuarios.find(function (user) {
  return user.empresa == 'Google';
});
var arr4 = usuarios.map(function (users) {
  return _objectSpread(_objectSpread({}, users), {}, {
    idade: users.idade * 2
  });
}).filter(function (users) {
  return users.idade <= 50;
}); // Exercicio 3
// 3.1

var arrayNumbers = [1, 2, 3, 4, 5];
arrayNumbers.map(function (item) {
  return item + 2;
}); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Marco',
  idade: 21
};

var mostraIdade = function mostraIdade() {
  var usuario = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return usuario.idade;
}; // 3.3
// Dica: Utilize uma constante pra function


var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}; // 3.4


var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; // exercicio 4 


var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;

var mostraInfo = function mostraInfo(_ref) {
  var _ref$nome = _ref.nome,
      nome = _ref$nome === void 0 ? "" : _ref$nome,
      _ref$idade = _ref.idade,
      idade = _ref$idade === void 0 ? 0 : _ref$idade;
  return idade > 1 ? "Usuario ".concat(nome, " tem ").concat(idade, " anos de idade ") : "Usuario ".concat(nome, " tem ").concat(idade, " ano de idade ");
}; // exercicio 5


var a = arrayNumbers[0],
    resto = arrayNumbers.slice(1);

function somar(_ref2) {
  var _ref3 = _toArray(_ref2),
      props = _ref3.slice(0);

  var p,
      total = 0;

  for (p = 0; p < props.length; p++) {
    total += props[p];
  }

  return total;
} // exercicio 5


var user = {
  nome: "Marco",
  idade: 21,
  endereco: {
    cidade: "Curitiba",
    uf: "PR"
  }
};

var testando = _objectSpread(_objectSpread({}, user), {}, {
  nome: "Gabriel"
});

testando = _objectSpread(_objectSpread({}, user), {}, {
  nome: "Lontras"
}); // 

var vaasdfdasf = "top";
var iae = "iae";
var iaeman = {
  vaasdfdasf: vaasdfdasf,
  iae: iae
};
console.log(iaeman);
