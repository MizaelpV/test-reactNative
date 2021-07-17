import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import Data from '../../data';
import Colors from '../lib/Colors';

const Table = () => {
  const [dataDetail, setDataDetail] = useState(Data);
  useEffect(() => {
    setDataDetail(Data);
  }, []);

  const {
    colonyContainer,
    titleColony,
    estimateContainer,
    estimateTitle,
    containerIcon,
    tableRow,
    titleRow,
    dinamicRow,
    iconEstimate,
  } = styles;
  return (
    <>
      <View style={colonyContainer}>
        <Text style={titleColony}>Colony Starwood Homes</Text>
      </View>
      <View style={estimateContainer}>
        <Pressable style={containerIcon}>
          <Text style={iconEstimate}>▼</Text>
        </Pressable>
        <Text style={estimateTitle}>new estimates</Text>
      </View>
      <View>
        <View style={tableRow}>
          <Text style={titleRow}>Bid No↗</Text>
          <Text style={titleRow}>Home Address</Text>
          <Text style={titleRow}>City</Text>
        </View>
        <View style={dinamicRow}>
          <Text>{dataDetail[1].bidNumber}</Text>
          <Text>{dataDetail[1].address}</Text>
          <Text>{dataDetail[1].city}</Text>
        </View>
        <View style={tableRow}>
          <Text style={titleRow}>State</Text>
          <Text style={titleRow}>Zip</Text>
          <Text style={titleRow}>Start Date</Text>
        </View>
        <View style={dinamicRow}>
          <Text>{dataDetail[1].state}</Text>
          <Text>{dataDetail[1].zip}</Text>
          <Text>{dataDetail[1].startDate}</Text>
        </View>
        <View style={tableRow}>
          <Text style={titleRow}>Due Date</Text>
          <Text style={titleRow}>Bid coordinator</Text>
          <Text style={titleRow}>Bid status</Text>
          <Text style={titleRow}>Total Price</Text>
        </View>
        <View style={dinamicRow}>
          <Text>{dataDetail[1].dueDate}</Text>
          <Text>{dataDetail[1].bidCoordinator}</Text>
          <Text>{dataDetail[1].status}</Text>
          <Text>${dataDetail[1].totalPrice}</Text>
        </View>
        <View style={estimateContainer}>
          <Pressable style={containerIcon}>
            <Text style={iconEstimate}>▼</Text>
          </Pressable>
          <Text style={estimateTitle}>Estimates in-progress</Text>
        </View>
        <View>
          <View style={tableRow}>
            <Text style={titleRow}>Bid No↗</Text>
            <Text style={titleRow}>Home Address</Text>
            <Text style={titleRow}>City</Text>
          </View>
          <View style={dinamicRow}>
            <Text>{dataDetail[3].bidNumber}</Text>
            <Text>{dataDetail[3].address}</Text>
            <Text>{dataDetail[3].city}</Text>
          </View>
          <View style={tableRow}>
            <Text style={titleRow}>State</Text>
            <Text style={titleRow}>Zip</Text>
            <Text style={titleRow}>Start Date</Text>
          </View>
          <View style={dinamicRow}>
            <Text>{dataDetail[3].state}</Text>
            <Text>{dataDetail[3].zip}</Text>
            <Text>{dataDetail[3].startDate}</Text>
          </View>
          <View style={tableRow}>
            <Text style={titleRow}>Due Date</Text>
            <Text style={titleRow}>Bid coordinator</Text>
            <Text style={titleRow}>Bid status</Text>
            <Text style={titleRow}>Total Price</Text>
          </View>
          <View style={dinamicRow}>
            <Text>{dataDetail[3].dueDate}</Text>
            <Text>{dataDetail[3].bidCoordinator}</Text>
            <Text>{dataDetail[3].status}</Text>
            <Text>${dataDetail[3].totalPrice}</Text>
          </View>
        </View>
        <View style={estimateContainer}>
          <Pressable style={containerIcon}>
            <Text style={iconEstimate}>▼</Text>
          </Pressable>
          <Text style={estimateTitle}>approved bids</Text>
        </View>
        <View style={tableRow}>
          <Text style={titleRow}>Bid No↗</Text>
          <Text style={titleRow}>Home Address</Text>
          <Text style={titleRow}>City</Text>
        </View>
        <View>
          <View style={dinamicRow}>
            <Text>{dataDetail[2].bidNumber}</Text>
            <Text>{dataDetail[2].address}</Text>
            <Text>{dataDetail[2].city}</Text>
          </View>
          <View style={tableRow}>
            <Text style={titleRow}>State</Text>
            <Text style={titleRow}>Zip</Text>
            <Text style={titleRow}>Start Date</Text>
          </View>
          <View style={dinamicRow}>
            <Text>{dataDetail[2].state}</Text>
            <Text>{dataDetail[2].zip}</Text>
            <Text>{dataDetail[2].startDate}</Text>
          </View>
          <View style={tableRow}>
            <Text style={titleRow}>Due Date</Text>
            <Text style={titleRow}>Bid coordinator</Text>
            <Text style={titleRow}>Bid status</Text>
            <Text style={titleRow}>Total Price</Text>
          </View>
          <View style={dinamicRow}>
            <Text>{dataDetail[2].dueDate}</Text>
            <Text>{dataDetail[2].bidCoordinator}</Text>
            <Text>{dataDetail[2].status}</Text>
            <Text>${dataDetail[2].totalPrice}</Text>
          </View>
        </View>
        <View style={tableRow}>
          <Text style={titleRow}>Bid No↗</Text>
          <Text style={titleRow}>Home Address</Text>
          <Text style={titleRow}>City</Text>
        </View>
        <View>
          <View style={dinamicRow}>
            <Text>{dataDetail[0].bidNumber}</Text>
            <Text>{dataDetail[0].address}</Text>
            <Text>{dataDetail[0].city}</Text>
          </View>
          <View style={tableRow}>
            <Text style={titleRow}>State</Text>
            <Text style={titleRow}>Zip</Text>
            <Text style={titleRow}>Start Date</Text>
          </View>
          <View style={dinamicRow}>
            <Text>{dataDetail[0].state}</Text>
            <Text>{dataDetail[0].zip}</Text>
            <Text>{dataDetail[0].startDate}</Text>
          </View>
          <View style={tableRow}>
            <Text style={titleRow}>Due Date</Text>
            <Text style={titleRow}>Bid coordinator</Text>
            <Text style={titleRow}>Bid status</Text>
            <Text style={titleRow}>Total Price</Text>
          </View>
          <View style={dinamicRow}>
            <Text>{dataDetail[0].dueDate}</Text>
            <Text>{dataDetail[0].bidCoordinator}</Text>
            <Text>{dataDetail[0].status}</Text>
            <Text>${dataDetail[0].totalPrice}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const {primary, secondary, golden, tablerow} = Colors;

const styles = StyleSheet.create({
  colonyContainer: {
    backgroundColor: secondary,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleColony: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  estimateContainer: {
    backgroundColor: primary,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  estimateTitle: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerIcon: {
    width: 30,
    height: 30,
    backgroundColor: golden,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: tablerow,
    width: '100%',
    height: 40,
  },
  titleRow: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dinamicRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: golden,
    borderBottomColor: '#fff',
    borderTopColor: '#fff',
    borderWidth: 1.5,
  },
  iconEstimate: {
    color: '#5b912f',
    fontWeight: 'bold',
  },
});
export default Table;
