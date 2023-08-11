"use client";
import React from "react";
import Nav from "../_components/nav";
import Footer from "../_components/footer";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Page() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <h1 className="mt-32 mb-10 text-2xl sm:text-3xl font-semibold">
        Find us on
      </h1>
      {!isLoaded ? (
        <div className="w-[90%] h-96 bg-slate-200 mb-20">map</div>
      ) : (
        <Map />
      )}
    </div>
  );
}

function Map() {
  const center = useMemo(
    () => ({ lat: 3.58645333723887, lng: 98.64817388146465 }),
    []
  );

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName="map">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Page;
