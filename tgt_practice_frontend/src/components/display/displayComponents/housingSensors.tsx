import React from "react";
import { Sensor } from "src/types/interfaces";

interface HousingSensorsProps {
    sensors: Sensor[];
    sensorRecordPoints: Record<string, string>;
    handleSensorRecordPointChange: (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    invalidParameters: Record<string, boolean>;
    role: string | undefined;
}

const HousingSensors: React.FC<HousingSensorsProps> = ({ sensors, sensorRecordPoints, handleSensorRecordPointChange, invalidParameters, role }) => (
    <div className="params">
        <h4>Housing Sensors</h4>
        <table className="Housing_params-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Record Point</th>
                </tr>
            </thead>
            <tbody>
                {sensors.map((sensor: Sensor) => (
                    <DisplaySensorComponent
                        key={sensor.rToolsensortype.id}
                        sensor={sensor}
                        recordPoint={sensorRecordPoints[sensor.id]}
                        onChange={handleSensorRecordPointChange}
                        isInvalid={invalidParameters[sensor.id]}
                        role={role} />
                ))}
            </tbody>
        </table>
    </div>
);

interface DisplaySensorComponentProps {
    sensor: Sensor;
    recordPoint: string;
    onChange: (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    isInvalid: boolean;
    role: string | undefined;
}

const DisplaySensorComponent: React.FC<DisplaySensorComponentProps> = ({ sensor, recordPoint, onChange, isInvalid, role }) => (
    <tr>
        <td>
            <input type="text" defaultValue={sensor.rToolsensortype.name} disabled={role === "user"} />
        </td>
        <td>
            <input
                type="text"
                value={recordPoint || ""}
                onChange={onChange(sensor.id)}
                className={`sensors_parametrs ${isInvalid ? 'invalid' : ''}`}
                disabled={role === "user"}
            />
            {sensor.unit.name.en}
        </td>
    </tr>
);

export default HousingSensors;
