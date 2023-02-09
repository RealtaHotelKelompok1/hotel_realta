import { Button, Modal, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";

interface Stock {
  stockName: string;
  stockPhoto: string;
  stockDescription: string;
  stockQty: number;
  stockReorderPoint: number;
  stockUsed: number;
  stockScrap: number;
  stockPrice: number;
  stockStandardCost: number;
  stockSize: string;
  stockColor: string;
}

interface Detail {
  stodStockId: number;
  stodBarcode: string;
  stodStatus: string;
  stodNotes: string;
  stodFacilityId: number;
}

export const Stocks = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const openModal1 = () => {
    setShowModal1(true);
  };
  const closeModal1 = () => {
    setShowModal1(false);
  };
  const openModal2 = () =>{
    setShowModal2(true)
  }
  const closeModal2 = () =>{
    setShowModal2(false)
  }
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const detailColumn: ColumnsType<Detail> = [
    { title: "Stocks ID", dataIndex: "stodStockId", key: "stodStockId" },
    { title: "Barcode", dataIndex: "stodBarcode", key: "stodBarcode" },
    { title: "Status", dataIndex: "stodStatus", key: "stodStatus" },
    { title: "Notes", dataIndex: "stodNotes", key: "stodNotes" },
    {
      title: "Facility ID",
      dataIndex: "stodFacilityId",
      key: "stodFacilityId",
    },
  ];
  const dataDetail: Detail[] = [
    {
      stodStockId: 1,
      stodBarcode: "barfadf#Fdaj3VDF",
      stodStatus: "Stocked",
      stodNotes: "Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet",
      stodFacilityId: 3,
    },
  ];
  const stockColumn: ColumnsType<Stock> = [
    { title: "Stocks Name", dataIndex: "stockName", key: "stockName" },
    {
      title: "Photo",
      dataIndex: "stockPhoto",
      key: "stockPhoto",
      render: (record) => <img src={record.stockPhoto} />,
    },
    { title: "Quantity", dataIndex: "stockQty", key: "stockQty" },
    {
      title: "Reorder Point",
      dataIndex: "stockReorderPoint",
      key: "stockReorderPoint",
    },
    { title: "Used", dataIndex: "stockUsed", key: "stockUsed" },
    { title: "Stock Scrap", dataIndex: "stockScrap", key: "stockScrap" },
    { title: "Price", dataIndex: "stockPrice", key: "stockPrice" },
    {
      title: "Standard Cost",
      dataIndex: "stockStandardCost",
      key: "stockStandardCost",
    },
    { title: "Size", dataIndex: "stockSize", key: "stockSize" },
    { title: "Color", dataIndex: "stockColor", key: "stockColor" },
    { title: "", dataIndex: "", key: "x", render: () => <p onClick={openModal2} className="hover:underline hover:text-blue-500 cursor-pointer">Edit</p> },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: () => (
        <p
          onClick={openModal}
          className="hover:underline hover:text-blue-500 cursor-pointer"
        >
          See Details
        </p>
      ),
    },
  ];
  const dataStocks: Stock[] = [
    {
      stockName: "Shampoo Clear",
      stockPhoto: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      stockQty: 5,
      stockReorderPoint: 2,
      stockUsed: 1,
      stockScrap: 0,
      stockPrice: 500000,
      stockStandardCost: 100000,
      stockSize: "medium",
      stockColor: "blue",
      stockDescription: "Lorem Ipsum dolor sit amet",
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-3">
      <h4 className="font-bold text-center m-4">Stocks</h4>
      <Table
        columns={stockColumn}
        dataSource={dataStocks}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.stockDescription}</p>
          ),
        }}
      />
      <Modal
        title="All Stocks"
        open={showModal}
        onCancel={closeModal}
        width={"full"}
      >
        <Table columns={detailColumn} dataSource={dataDetail} />
      </Modal>
      <Modal
        title="New Stocks"
        open={showModal1}
        onCancel={closeModal1}
        width={"full"}
      >
      </Modal>
      <Modal
        title="Edit Stocks"
        open={showModal2}
        onCancel={closeModal2}
        width={"full"}
        footer={[<Button onClick={closeModal2}>Cancel</Button>,
        <Button>Save</Button>
      ]}
      >
        <form>
          <div className="relative z-0 w-96 mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_text"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Stock Name
            </label>
          </div>
          <div className="relative z-0 w-96 mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_text"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          <div className="relative z-0 w-96 mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_text"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Quantity
            </label>
          </div>
          <div className="relative z-0 w-96 mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_text"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Reorder Point
            </label>
          </div>
          <div className="relative z-0 w-96 mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_text"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Stock Used
            </label>
          </div>
          <div className="relative z-0 w-96 mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_text"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Stock Scrap
            </label>
          </div>
          <div className="relative z-0 w-96 mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_text"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>
          <div className="relative z-0 w-96 mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_text"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Standard Cost
            </label>
          </div>
          <div className="relative z-0 w-96 mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_text"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Size
            </label>
          </div>
          <div className="relative z-0 w-96 mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_text"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Color
            </label>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Stocks;
