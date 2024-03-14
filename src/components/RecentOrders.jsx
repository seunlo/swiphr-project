import { Table } from "flowbite-react";

export default function RecentOrders() {
  return (
    <div className="max-w-6xl mx-auto mt-5 border rounded-lg h-[260px] flex flex-col table-auto md:mx-auto">
      <div className="my-4 ml-4 flex flex-col">
        <span className="font-semibold">Recent Orders</span>
        <span className="text-xs text-slate-500">
          Here are the most recent financial transaction
        </span>
      </div>
      <div className="mx-4">
        <Table className="">
          <Table.Head>
            <Table.HeadCell className="bg-purple-900 text-white capitalize">
              Product Name
            </Table.HeadCell>
            <Table.HeadCell className="bg-purple-900 text-white capitalize">
              Order number
            </Table.HeadCell>
            <Table.HeadCell className="bg-purple-900 text-white capitalize">
              Date
            </Table.HeadCell>
            <Table.HeadCell className="bg-purple-900 text-white capitalize">
              Price
            </Table.HeadCell>
            <Table.HeadCell className="bg-purple-900 text-white capitalize">
              Status
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row>
              <Table.Cell>
                <div className="flex gap-2">
                  <span className="w-7 h-7 bg-purple-500 rounded-full"></span>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-xs">Product Name</span>
                    <span className="text-slate-500 text-xs">
                      Product description
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-xs">#1234567</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-xs">12-April-2023</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-xs">N10,000</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-xs bg-green-400 px-3 py-1 font-semibold rounded-full">
                  Completed
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex gap-2">
                  <span className="w-7 h-7 bg-purple-500 rounded-full"></span>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-xs">Product Name</span>
                    <span className="text-slate-500 text-xs">
                      Product description
                    </span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-xs">#1234567</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-xs">12-April-2023</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-xs">N10,000</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-xs bg-green-200 px-3 py-1 font-semibold rounded-full">
                  Pending
                </span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
