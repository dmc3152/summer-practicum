/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_105610_36_TransitionListenerImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        androidx.transition.Transition.TransitionListener {
  public Object_vendor_105610_36_TransitionListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onTransitionStart(androidx.transition.Transition param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onTransitionStart", void.class, args);
  }

  public void onTransitionEnd(androidx.transition.Transition param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onTransitionEnd", void.class, args);
  }

  public void onTransitionCancel(androidx.transition.Transition param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onTransitionCancel", void.class, args);
  }

  public void onTransitionPause(androidx.transition.Transition param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onTransitionPause", void.class, args);
  }

  public void onTransitionResume(androidx.transition.Transition param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onTransitionResume", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
