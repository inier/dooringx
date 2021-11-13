/*
 * @Author: yehuozhili
 * @Date: 2021-02-27 21:33:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-18 19:54:56
 * @FilePath: \dooringx\packages\dooringx-example\src\plugin\index.tsx
 */

import { InitConfig } from 'dooringx-lib';
import { LeftRegistComponentMapItem } from 'dooringx-lib/dist/core/crossDrag';
import { ContainerOutlined, PlayCircleOutlined, HighlightOutlined } from '@ant-design/icons';
import commandModules from './commanderModules';
import { functionMap } from './functionMap';
import { Formmodules } from './formComponentModules';
import InputCo from './registComponents/inputCo';
import Swipe from './registComponents/swipe';

const LeftRegistMap: LeftRegistComponentMapItem[] = [
	{
		type: 'basic',
		component: 'button',
		img: 'icon-anniu',
		imgCustom: <PlayCircleOutlined />,
		displayName: '按钮',
		urlFn: () => import('./registComponents/button'),
	},
	{
		type: 'basic',
		component: 'input',
		img: 'icon-anniu',
		imgCustom: <PlayCircleOutlined />,
		displayName: '输入框',
	},
	{
		type: 'basic',
		component: 'swipe',
		img: 'icon-anniu',
		imgCustom: <PlayCircleOutlined />,
		displayName: '轮播图',
	},
];

export const defaultConfig: Partial<InitConfig> = {
	leftAllRegistMap: LeftRegistMap,
	leftRenderListCategory: [
		{
			type: 'basic',
			icon: <HighlightOutlined />,
			displayName: '基础',
		},
		{
			type: 'media',
			icon: <PlayCircleOutlined />,
			displayName: '媒体组件',
		},
		{
			type: 'xxc',
			icon: <ContainerOutlined />,
			custom: true,
			displayName: '自定义',
			customRender: <div>我是自定义渲染</div>,
		},
	],
	initComponentCache: {
		input: { component: InputCo },
		swipe: { component: Swipe },
	},
	rightRenderListCategory: [
		{
			type: 'style',
			icon: (
				<div className="right-tab-item" style={{ width: 50, textAlign: 'center' }}>
					外观
				</div>
			),
		},
		{
			type: 'animate',
			icon: (
				<div className="right-tab-item" style={{ width: 50, textAlign: 'center' }}>
					动画
				</div>
			),
		},
		{
			type: 'fn',
			icon: (
				<div className="right-tab-item" style={{ width: 50, textAlign: 'center' }}>
					函数
				</div>
			),
		},
		{
			type: 'actions',
			icon: (
				<div className="right-tab-item" style={{ width: 50, textAlign: 'center' }}>
					事件
				</div>
			),
		},
	],
	initFunctionMap: functionMap,
	initCommandModule: commandModules,
	initFormComponents: Formmodules,
};

export default defaultConfig;
