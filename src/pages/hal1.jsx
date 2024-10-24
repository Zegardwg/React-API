import React, { useState } from "react";
import ProvinsiList from "../components/ProvinsiList.jsx";
import KabupatenList from "../components/KabupatenList.jsx";
import KecamatanList from "../components/KecamatanList.jsx";
import KelurahanList from "../components/KelurahanList.jsx";

function Hal1() {
  const [selectedProvinsi, setSelectedProvinsi] = useState(null);
  const [selectedKabupaten, setSelectedKabupaten] = useState(null);
  const [selectedKecamatan, setSelectedKecamatan] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Wilayah Indonesia</h1>
        <h2>Selamat Datang di Aplikasi Data Wilayah</h2>
        <ProvinsiList onProvinsiSelect={setSelectedProvinsi} />
        {selectedProvinsi && (
          <KabupatenList
            provinsiId={selectedProvinsi}
            onKabupatenSelect={setSelectedKabupaten}
          />
        )}
        {selectedKabupaten && (
          <KecamatanList
            kabupatenId={selectedKabupaten}
            onKecamatanSelect={setSelectedKecamatan}
          />
        )}
        {selectedKecamatan && <KelurahanList kecamatanId={selectedKecamatan} />}
      </header>
    </div>
  );
}

export default Hal1;
