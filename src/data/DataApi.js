export const getServicesTypes = async () => {
    const res = await fetch(
        'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/servicestype/'
    )
    const data = await res.json()
    return data.items
}