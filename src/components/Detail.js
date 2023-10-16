/* eslint-disable eqeqeq */
import React, { useRef, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { playerData } from '../shared/ListOfPlayers'
import M from 'materialize-css' // import materialize-css package
// Import the ModalCase component
import ModalCase from './ModalCase';

// Tạo một component Detail để hiển thị thông tin chi tiết của một cầu thủ
const Detail = () => {
  // Sử dụng hook useParams để lấy giá trị của id từ URL
  const { id } = useParams();
  // Tìm cầu thủ có id trùng với giá trị lấy được
  const player = playerData.find(obj => {
    return obj.id == id;
  });
  // Định dạng lại giá trị của cost để có dấu phẩy ngăn cách hàng nghìn
  let cost = player.cost.toLocaleString();
  // Tạo một tham chiếu đến phần tử modal
  const modalRef = useRef(null);
  // Khởi tạo modal trong useEffect hook
  useEffect(() => {
    M.Modal.init(modalRef.current);
  }, []);
  // Tạo một state để quản lý trạng thái mở đóng của modal
  const [isOpen, setIsOpen] = useState(false);
  // Trả về một đoạn JS để render ra giao diện
  return (
    <div className='container'>
      <div className='product-card'>
        <div className='badge'>{player.name}</div>
        <div className='product-tumb'>
          <img src={`../${player.img}`} alt=''/>
        </div>
        <div className='product-details'>
          <h4>{player.club}</h4>
          <div className='product-price'>Market value: € {cost}</div>
          <p>{player.info}</p>
          <div className='product-bottom-details'>
            {/* Thêm một nút icon để mở modal */}
            <button onClick={() => setIsOpen(true)} data-target="video-modal" className="btn modal-trigger">
              <i className="material-icons">play_circle_outline</i>
            </button>
          </div>
        </div>
      </div>
      {/* Thêm một phần tử modal để hiển thị video */}
      {/* Sử dụng conditional rendering để chỉ hiển thị modal khi isOpen là true */}
      {/* Truyền props setIsOpen và player cho component ModalCase */}
      {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
    </div>
  )
}

export default Detail;