import React from 'react';
import { Badge } from './ui/badge';
import { Wifi, WifiOff, Download } from 'lucide-react';

interface OfflineStatusProps {
  isOffline: boolean;
}

export function OfflineStatus({ isOffline }: OfflineStatusProps) {
  return (
    <Badge 
      variant={isOffline ? "destructive" : "default"}
      className={`flex items-center gap-1 ${
        isOffline 
          ? 'bg-orange-500 text-white border-orange-600' 
          : 'bg-green-500 text-white border-green-600'
      }`}
    >
      {isOffline ? (
        <>
          <WifiOff className="w-3 h-3" />
          <span className="text-xs">Offline</span>
        </>
      ) : (
        <>
          <Wifi className="w-3 h-3" />
          <span className="text-xs">Online</span>
        </>
      )}
    </Badge>
  );
}