interface kioskRowProps {
    kiosk: {
        id: String;
        serialKey: String;
        description: String;
        isKioskClosed: Boolean;
        storeOpensAt: Date;
        storeClosesAt: Date;
    }
}

export default kioskRowProps;