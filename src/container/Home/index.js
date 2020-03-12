import React, {useEffect, useState} from 'react';
import {Button, Table, Form, Input, Spin} from 'antd';
import {listSearch} from './services';
import {useRequest} from '@umijs/hooks';

const Home = () => {
    const [formData, setFormData] = useState({});
    const [dataSource, setDataSource] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [form] = Form.useForm();

    const {loading, run} = useRequest(listSearch, {
        manual: true,
        onSuccess: (res) => {
            if(!res.status) {
                console.log(res.data);
            }
        }
    });

    useEffect(() => {
        run(formData);
    }, [run, formData]);
    return (
        <div>
            <Spin spinning={loading}>
                <Form form={form} onFinish={(values)=>setFormData(values)}>
                    <Form.Item label="姓名" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Spin>
        </div>
    );
};

export default Home;
