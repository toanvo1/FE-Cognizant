import React from 'react'

const Infrastructure = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://s3-alpha-sig.figma.com/img/48d2/4ea2/d0f3ea252e39ef866a17afd9315afe19?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CwkfQHZbMPI5D8-Vbi~chNQGFEzHujxXbsOp5GgllUK88c~cxilbX9nzWislkoXW4PnCplGDyGsmN3MEM-nt-B7Ak1wINlWZjRM2zSJzSc7WoHKSisoyOWbeTL20njF-Yi25i4A3lWIr7188dfvzhXH4C8UTFN9btiZ834XcT7BnXMkkysdcT3-QiRBYvjsc7ENNAesI1S0UU8-HRoMPg6XIz1Ch92IPCiGuL15wQPYqwWl2~0QsfybNTjBhs2buYjRHFFkBbo2cNAa8erQWj8Sv5b3rMyP0CkS3IsVtUcB5QrUSBBK4Zuh2DD-~3LK2jF64EmU51RhSeg3gKkoc4Q__"
        alt="Education"
        className="content-image"
      />

      {/* Text Section */}
      <div className="content-inner">
      <h2 className="content-heading">Infrastructures</h2>
        <ul className="content-list">
          <li className="content-list-item">
            Data Center Design and Implementation       
          </li>
          <li className="content-list-item">
            High Availability Systems
          </li>
          <li className="content-list-item">
            Managed Services
          </li>
          <li className="content-list-item">
            Security and Compliance
          </li>
        </ul>
    </div>
    </div>
  );
}

export default Infrastructure
