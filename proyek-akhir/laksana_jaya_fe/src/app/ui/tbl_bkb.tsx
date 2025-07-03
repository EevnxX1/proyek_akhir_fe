import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Table } from "../component/table";
import Link from "next/link";

export default function TabelBukuKasBesar() {
    const dataTh = 
    [
        'No',
        'Tanggal',
        'Kode Transaksi',
        'Keterangan',
        'Debit',
        'Saldo',
        'Action',
    ]
    const dataTd = [
    ["1", "12/4/2025", "BKC-0112030025", "Tf buku kas kecil", "-", "Rp.158.000.000", "Rp.556.140.000"],
    ["2", "13/4/2025", "BKC-0112030026", "Bayar vendor", "Rp.20.000.000", "-", "Rp.536.140.000"]
  ]
    // [
    //     '1',
    //     '12/4/2025',
    //     'BKC-0112030025',
    //     'Tf buku kas kecil',
    //     'Rp.10.000.000',
    //     '-',
    //     'Rp.556.140.000'
    // ],
    return(
        <section className="relative mx-auto w-[91vw] rounded-xl bg-white/20 px-8 py-8">
        <div className="text-white mb-5">
            <h1 className="font-bold text-2xl mb-3">Buku Kas Besar</h1>
            <div className="flex justify-between">
                <form action="" className="flex space-x-5">
                    <div className="flex flex-col">
                        <label className="mb-[2px]">Pilih Tanggal Mulai:</label>
                        <input type="date" name="" id="" className="bg-white/40 px-3 py-1 rounded-lg cursor-pointer text-gray-700"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-[2px]">Pilih Tanggal Selesai:</label>
                        <input type="date" name="" id="" className="bg-white/40 px-3 py-1 rounded-lg cursor-pointer text-gray-700"/>
                    </div>
                    <button type="submit" className="flex cursor-pointer self-end px-3 py-1 bg-[#9EFF66] rounded-lg text-gray-700 font-medium"><span className="mr-1">Cari</span> <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4"/></button>
                </form>
                <a href="" className="h-fit self-end"><button className="flex cursor-pointer px-3 py-1 bg-[#9EFF66] rounded-lg text-gray-700 font-medium"><FontAwesomeIcon icon={faPrint} className="w-5"/><span className="ml-1">Cetak Transkip</span></button></a>
            </div>
        </div>
        <div>
            <h1 className="font-bold text-xl mb-3 text-white">Data Transaksi</h1>
            <Table
            dataTh={dataTh}
            dataTd={dataTd}

            >
                <Link
                href={''}
                className={'text-green-800'}
                >
                    <FontAwesomeIcon icon={faPenToSquare} className="w-5" />
                </Link>
                <span className="border border-gray-500 mr-[6px] ml-[3px]"></span>
                <Link
                href={''}
                className={'text-red-800'}
                >
                    <FontAwesomeIcon icon={faCircleXmark} className="w-5"/>
                </Link>
            </Table>
        </div>
        <div className="mt-5">
            <a href="formbb"><button className="flex cursor-pointer px-3 py-1 bg-[#9EFF66] rounded-lg text-gray-700 font-medium"><FontAwesomeIcon icon={faPlus} className="w-5"/><span className="ml-1">Tambah Transaksi</span></button></a>
        </div>
    </section>
    );
}