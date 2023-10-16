// Nhập các thư viện và dữ liệu cần thiết
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
// Nhập các component của React Materialize
import { TextInput, Select, Textarea, Button, Row, Col, Card, Container, Icon } from 'react-materialize'

// Tạo một component Contact để hiển thị một form liên hệ
const Contact = () => {
  // Sử dụng hook useForm để quản lý các trường nhập liệu
  const { register, handleSubmit, formState: { errors } } = useForm();
  // Sử dụng hook useState để quản lý trạng thái của form
  const [success, setSuccess] = useState(false);

  // Tạo một hàm để xử lý khi người dùng gửi form
  const onSubmit = (data) => {
    // Sử dụng emailjs để gửi email từ form
    emailjs.send('service_id', 'template_id', data, 'user_id')
      .then((result) => {
        // Nếu gửi thành công, thay đổi trạng thái của form và hiển thị thông báo
        setSuccess(true);
        alert('Your message has been sent successfully!');
      }, (error) => {
        // Nếu gửi thất bại, hiển thị thông báo lỗi
        alert('Something went wrong. Please try again later.');
      });
  }

  // Trả về một đoạn JS để render ra giao diện
  return (
    <Container>
      <Row>
        <Col s={12} m={8} offset="m2">
          <Card className='contact-card'>
            <h1>Contact us</h1>
            <p>If you have any questions or feedback, please fill out the form below and we will get back to you as soon as possible.</p>
            {/* Nếu form chưa được gửi, hiển thị form nhập liệu */}
            {!success && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput id='name' label='Your Name' {...register('name', { required: true })} error={errors.name && 'This field is required'} />
                <TextInput id='phone' label='Your Phone' {...register('phone', { required: true })} error={errors.phone && 'This field is required'} />
                <TextInput id='email' label='Email' type='email' {...register('email', { required: true })} error={errors.email && 'Please enter a valid email address'} />
                <Select id='nation' label='Choose your favourite nation' multiple={false} options={{ classes: '', dropdownOptions: { alignment: 'left', autoTrigger: true, closeOnClick: true, constrainWidth: true, coverTrigger: true, hover: false } }} value='' {...register('nation', { required: true })} error={errors.nation && 'This field is required'}>
                  <option value='' disabled>Choose your option</option>
                  <option value='Vietnam'>Vietnam</option>
                  <option value='England'>England</option>
                  <option value='France'>France</option>
                  <option value='Spain'>Spain</option>
                </Select>
                <Textarea id='content' label='Your content' {...register('content', { required: true })} error={errors.content && 'This field is required'} />
                <Button className='send-button' type='submit' node="button" waves="light" large>Submit<Icon left>send</Icon></Button>
              </form>
            )}
            {/* Nếu form đã được gửi, hiển thị một đoạn văn cảm ơn */}
            {success && (
              <p>Thank you for contacting us. We appreciate your interest and will respond to your inquiry as soon as we can.</p>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

// Xuất khẩu component Contact để có thể sử dụng ở nơi khác
export default Contact;