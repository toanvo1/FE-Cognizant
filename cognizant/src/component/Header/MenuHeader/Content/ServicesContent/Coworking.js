import React from 'react';

const Coworking = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://s3-alpha-sig.figma.com/img/3830/c575/fc58ad7d97dd5206986d8e73945949f4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8wkpbGbIid0r8-eoFUbP9cZcbqimmc90cwmPZcMsyU6BMVo4HUtvcPiujIBayoiDChtVohlvSL8RV3JRYi66ACu~Rp9-xWRFGpNH6TEXv07ahYNIaNyGD5sOSJqrBd6kA6mpKleexVZi5pVxzvwfm9LkWnPlVuZIskZJt6nrFA65X8FVJICu1cz4ZwTo-I4~JFm7CfcZ0EAJaLfmwLFfxoikIExsfek5yzgReaMAyLTqWvCGhHwmJQKMERhFTD6aYiqHsQnEhzfKgN~wX7juv2AyO~BAW9mxrP4uKrN7Bv4742CQRmSG~YKhv9w-rOoEdc4y354trSNVVrYGVT0Rg__"
        alt="Education"
        className="content-image"
      />

      {/* Text Section */}
      <div className="content-inner">
      <h2 className="content-heading">Coworking Space</h2>
        <ul className="content-list">
          <li className="content-list-item">
            Fully Furnished Spaces       
          </li>
          <li className="content-list-item">
            Meeting Rooms & Private Areas
          </li>
          <li className="content-list-item">
            High-Speed Internet
          </li>
          <li className="content-list-item">
            Complimentary Amenities
          </li>
        </ul>
    </div>
    </div>
  );
}

export default Coworking;
