/****************************************************************************
** Meta object code from reading C++ file 'webactionproxy.h'
**
** Created: Sun Sep 12 19:32:29 2010
**      by: The Qt Meta Object Compiler version 62 (Qt 4.6.2)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "webactionproxy.h"
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'webactionproxy.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 62
#error "This file was generated using the moc from 4.6.2. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
static const uint qt_meta_data_WebActionProxy[] = {

 // content:
       4,       // revision
       0,       // classname
       0,    0, // classinfo
       2,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       1,       // signalCount

 // signals: signature, parameters, type, tag, flags
      16,   15,   15,   15, 0x05,

 // slots: signature, parameters, type, tag, flags
      28,   15,   15,   15, 0x0a,

       0        // eod
};

static const char qt_meta_stringdata_WebActionProxy[] = {
    "WebActionProxy\0\0triggered()\0trigger()\0"
};

const QMetaObject WebActionProxy::staticMetaObject = {
    { &QObject::staticMetaObject, qt_meta_stringdata_WebActionProxy,
      qt_meta_data_WebActionProxy, 0 }
};

#ifdef Q_NO_DATA_RELOCATION
const QMetaObject &WebActionProxy::getStaticMetaObject() { return staticMetaObject; }
#endif //Q_NO_DATA_RELOCATION

const QMetaObject *WebActionProxy::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->metaObject : &staticMetaObject;
}

void *WebActionProxy::qt_metacast(const char *_clname)
{
    if (!_clname) return 0;
    if (!strcmp(_clname, qt_meta_stringdata_WebActionProxy))
        return static_cast<void*>(const_cast< WebActionProxy*>(this));
    return QObject::qt_metacast(_clname);
}

int WebActionProxy::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QObject::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        switch (_id) {
        case 0: triggered(); break;
        case 1: trigger(); break;
        default: ;
        }
        _id -= 2;
    }
    return _id;
}

// SIGNAL 0
void WebActionProxy::triggered()
{
    QMetaObject::activate(this, &staticMetaObject, 0, 0);
}
QT_END_MOC_NAMESPACE
