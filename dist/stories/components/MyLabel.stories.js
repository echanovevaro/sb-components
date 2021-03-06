"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.Terttiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: {
            control: 'select',
            // options: ['normal', 'h1', 'h2', 'h3'],
        },
        color: {
            control: 'select',
        },
        fontColor: { control: 'color' },
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args), void 0)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'h1',
    label: 'Hello',
    allCaps: false,
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'h1',
    allCaps: true,
    color: 'tertiary',
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'h1',
    color: 'primary',
    allCaps: true,
};
exports.Terttiary = Template.bind({});
exports.Terttiary.args = {
    size: 'h1',
    color: 'secondary',
    allCaps: true,
};
exports.CustomColor = Template.bind({});
exports.CustomColor.args = {
    size: 'h1',
    fontColor: '#5517ac',
};
