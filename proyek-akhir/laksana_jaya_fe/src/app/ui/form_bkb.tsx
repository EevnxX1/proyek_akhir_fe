export default function FormBKB() {
    return(
        <section className="relative w-[91vw] h-[80vh] min-[1100px]:h-auto mx-auto rounded-xl bg-white/20 px-14 py-14 min-[1100px]:px-28">
        <h1 className="font-bold text-white text-2xl mb-6">Form Transaksi</h1>
        <form action="" className="flex flex-wrap min-[1100px]:flex-nowrap justify-between space-y-5 text-white min-[1100px]:flex-col">
            <div className="flex min-[1100px]:flex-col min-[1100px]:w-full items-center min-[1100px]:items-start min-[1100px]:space-y-1 space-x-16">
                <label className="min-[1100px]:text-lg">Tanggal</label>
                <input type="date" name="tgl_transaksi" id="tanggal" className="bg-white/15 w-[250px] px-4 py-[6px] min-[1100px]:h-[45px] rounded-lg min-[1100px]:w-full"/>
            </div>
            <div className="flex min-[1100px]:flex-col min-[1100px]:w-full items-center min-[1100px]:items-start min-[1100px]:space-y-1 space-x-10">
                <label className="min-[1100px]:text-lg">Kode Transaksi</label>
                <input type="text" name="kd_transaksi" id="kode" className="bg-white/15 w-[250px] px-4 py-[6px] min-[1100px]:h-[45px] rounded-lg min-[1100px]:w-full"/>
            </div>
            <div className="flex min-[1100px]:flex-col min-[1100px]:w-full items-center min-[1100px]:items-start min-[1100px]:space-y-1 space-x-10">
                <label className="min-[1100px]:text-lg">Keterangan</label>
                <textarea name="ket_transaksi" id="ket" cols={30} rows={10} className="bg-white/15 w-[250px] h-[100px] px-4 py-[6px] rounded-lg min-[1100px]:w-full"></textarea>
            </div>
            <div className="flex min-[1100px]:flex-col min-[1100px]:w-full items-center min-[1100px]:items-start min-[1100px]:space-y-1 space-x-10">
                <label className="min-[1100px]:text-lg">Debit</label>
                <input type="number" name="debit" id="debit" className="bg-white/15 w-[250px] px-4 py-[6px] min-[1100px]:h-[45px] rounded-lg min-[1100px]:w-full"/>
            </div>
            <div className="flex min-[1100px]:flex-col min-[1100px]:w-full items-center min-[1100px]:items-start min-[1100px]:space-y-1 space-x-20">
                <label className="min-[1100px]:text-lg">Kredit</label>
                <input type="number" name="kredit" id="kredit" className="bg-white/15 w-[250px] px-4 py-[6px] min-[1100px]:h-[45px] rounded-lg min-[1100px]:w-full"/>
            </div>
            <button type="submit" className="cursor-pointer w-[250px] h-[50px] bg-btnColor rounded-lg min-[1100px]:w-full text-gray-700 min-[1100px]:mt-4"><i className="fa-solid fa-folder-plus"></i><span className="ml-1">Simpan Transaksi</span></button>
        </form>
    </section>
    );
}