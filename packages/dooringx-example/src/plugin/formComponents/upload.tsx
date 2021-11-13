/*
 * @Author: yehuozhili
 * @Date: 2021-07-07 14:32:55
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-08-05 15:27:21
 * @FilePath: \dooringx\packages\dooringx-example\src\plugin\formComponents\input.tsx
 */
import { deepCopy, UserConfig } from 'dooringx-lib';
import { Col, Button, Upload, message, Row } from 'antd';
import { memo, useMemo } from 'react';
import React from 'react';
import { FormMap } from '../formTypes';
import { CreateOptionsRes } from 'dooringx-lib/dist/core/components/formTypes';
import { IBlockType } from 'dooringx-lib/dist/core/store/storetype';
import { UploadOutlined } from '@ant-design/icons';

interface MUploadProps {
	data: CreateOptionsRes<FormMap, 'upload'>;
	current: IBlockType;
	config: UserConfig;
}

function MUpload(props: MUploadProps) {
	const option = useMemo(() => {
		return props.data.option || {};
	}, [props.data]);
	const store = props.config.getStore();
	const propsT = {
		name: 'file',
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		headers: {
			authorization: 'authorization-text',
		},
		onChange(info: any) {
			if (info.file.status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (info.file.status === 'done') {
				message.success(`${info.file.name} file uploaded successfully`);
				const receive = (option as any).receive;
				const clonedata = deepCopy(store.getData());
				const newblock = clonedata.block.map((v: IBlockType) => {
					v.props[receive] = info.file.response.url;

					return v;
				});
				store.setData({ ...clonedata, block: [...newblock] });
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
	};
	return (
		<Row style={{ padding: '10px 20px' }}>
			<Col span={6} style={{ lineHeight: '30px' }}>
				{option.label || '文字'}：
			</Col>
			<Col span={18}>
				<Upload {...propsT}>
					<Button icon={<UploadOutlined />}>Click to Upload</Button>
				</Upload>
			</Col>
		</Row>
	);
}

export default memo(MUpload);
