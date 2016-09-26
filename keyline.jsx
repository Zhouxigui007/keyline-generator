#target photoshop
#include "lib/window_setup.jsx"
#include "lib/global_functions.jsx"

w.show();

function enterPressed(k) {
    if (k.keyName == "Enter") {
      runBtnPressed();
    }
}

function runBtnPressed() {
    app.preferences.rulerUnits = Units.INCHES;
    var doc = app.activeDocument,
        resolution = app.activeDocument.resolution,
        wBleed = parseFloat(widthBleedInput.text),
        hBleed = parseFloat(heightBleedInput.text),
        docWidthInches = parseFloat(doc.width),
        docHeightInches = parseFloat(doc.height),
        docWidth = parseFloat(doc.width) * resolution,
        docHeight = parseFloat(doc.height) * resolution,
        wBleedSize = widthBleedInput.text * resolution,
        hBleedSize = heightBleedInput.text * resolution;

    createKeyline(doc, docWidth, docHeight, wBleedSize, hBleedSize, docWidthInches, docHeightInches, resolution);

    w.close();
    alert('Process Complete...');
}

function createKeyline(doc, visibleWidth, visibleHeight, wBleedSize, hBleedSize, docWidthInches, docHeightInches, resolution) {
  var cyanColor = new CMYKColor;
      newLayer = doc.artLayers.add();
  cyanColor.cyan = 100;
  cyanColor.magenta = 0;
  cyanColor.yellow = 0;
  cyanColor.black = 0;
  newLayer.name = "MMT Visible";

  if(topLeft.value == true) {
    var keylineSelect = selection(0, 0, visibleWidth - wBleedSize, visibleHeight - hBleedSize);
    doc.guides.add(Direction.VERTICAL, docWidthInches - (wBleedSize/resolution));
    doc.guides.add(Direction.HORIZONTAL, docHeightInches - (hBleedSize/resolution));
  } else if(topCenter.value == true) {
    var keylineSelect = selection(wBleedSize, 0, visibleWidth - (wBleedSize * 2), visibleHeight - hBleedSize);
    doc.guides.add(Direction.VERTICAL, wBleedSize/resolution);
    doc.guides.add(Direction.HORIZONTAL, docHeightInches - (hBleedSize/resolution));
    doc.guides.add(Direction.VERTICAL, docWidthInches - (wBleedSize/resolution));
  } else if(topRight.value == true) {
    var keylineSelect = selection(wBleedSize, 0, visibleWidth, visibleHeight - hBleedSize);
    doc.guides.add(Direction.VERTICAL, wBleedSize/resolution);
    doc.guides.add(Direction.HORIZONTAL, docHeightInches - (hBleedSize/resolution));
  } else if(middleLeft.value == true) {
    var keylineSelect = selection(0, hBleedSize, visibleWidth - wBleedSize, visibleHeight - (hBleedSize * 2));
    doc.guides.add(Direction.HORIZONTAL, hBleedSize/resolution);
    doc.guides.add(Direction.HORIZONTAL, docHeightInches - (hBleedSize/resolution));
    doc.guides.add(Direction.VERTICAL, docWidthInches - (wBleedSize/resolution));
  } else if(middleCenter.value == true) {
    var keylineSelect = selection(wBleedSize, hBleedSize, visibleWidth - wBleedSize * 2, visibleHeight - hBleedSize * 2);
    doc.guides.add(Direction.HORIZONTAL, hBleedSize/resolution);
    doc.guides.add(Direction.HORIZONTAL, docHeightInches - (hBleedSize/resolution));
    doc.guides.add(Direction.VERTICAL, docWidthInches - (wBleedSize/resolution));
    doc.guides.add(Direction.VERTICAL, wBleedSize/resolution);
  } else if(middleRight.value == true) {
    var keylineSelect = selection(wBleedSize, hBleedSize, visibleWidth - wBleedSize, visibleHeight - (hBleedSize * 2));
    doc.guides.add(Direction.HORIZONTAL, hBleedSize/resolution);
    doc.guides.add(Direction.HORIZONTAL, docHeightInches - (hBleedSize/resolution));
    doc.guides.add(Direction.VERTICAL, wBleedSize/resolution);
  } else if(bottomLeft.value == true) {
    var keylineSelect = selection(0, hBleedSize, visibleWidth - wBleedSize, visibleHeight - hBleedSize);
    doc.guides.add(Direction.VERTICAL, docWidthInches - (wBleedSize/resolution));
    doc.guides.add(Direction.HORIZONTAL, hBleedSize/resolution);
  } else if(bottomCenter.value == true) {
    var keylineSelect = selection(wBleedSize, hBleedSize, visibleWidth - (wBleedSize * 2), visibleHeight - hBleedSize);
    doc.guides.add(Direction.VERTICAL, wBleedSize/resolution);
    doc.guides.add(Direction.HORIZONTAL, hBleedSize/resolution);
    doc.guides.add(Direction.VERTICAL, docWidthInches - (wBleedSize/resolution));
  } else if(bottomRight.value == true) {
    var keylineSelect = selection(wBleedSize, hBleedSize, visibleWidth - wBleedSize, visibleHeight - hBleedSize);
    doc.guides.add(Direction.VERTICAL, wBleedSize/resolution);
    doc.guides.add(Direction.HORIZONTAL, hBleedSize/resolution);
  }

  doc.selection.select(keylineSelect);
  doc.selection.stroke(cyanColor, strokeWidth.text, StrokeLocation.OUTSIDE);
}
